const Contact = require('../models/contact');
const Group = require('../models/group');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.list = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, 'firstName lastName');
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.show = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id).populate('group');

    if (!contact) {
      req.notFoundReason = `Contact ${req.params.id} not found`;
      return next();
    }

    res.json(contact);
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.add = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);

    if (req.body.group) {
      const group = await Group.findById(req.body.group);
      group.contacts.push(contact._id);
      await group.save();
    }

    res.statusCode = 201;
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.delete = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      req.notFoundReason = `Contact ${req.params.id} not found`;
      return next();
    }

    res.json(contact);
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.update = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);

    if (!contact) {
      req.notFoundReason = `Contact ${req.params.id} not found`;
      return next();
    }

    res.json(contact);
  } catch (err) {
    next(err);
  }
};
