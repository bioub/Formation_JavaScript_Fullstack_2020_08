const Group = require('../models/group');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.list = async (req, res, next) => {
  try {
    const groups = await Group.find({}, 'name');
    res.json(groups);
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
    const group = await Group.findById(req.params.id).populate('contacts');

    if (!group) {
      req.notFoundReason = `Group ${req.params.id} not found`;
      return next();
    }

    res.json(group);
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
    const group = await Group.create(req.body);
    res.statusCode = 201;
    res.json(group);
  } catch (err) {
    next(err);
  }
};
