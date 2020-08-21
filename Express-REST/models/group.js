const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  contacts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Contact',
    },
  ],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
