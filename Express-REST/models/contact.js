const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: String,
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'Group',
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
