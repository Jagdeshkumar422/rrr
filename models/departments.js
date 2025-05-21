const mongoose = require('mongoose');

const DepertmentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   location: {
    type: String
  },
}, { timestamps: true });

module.exports = mongoose.model('departments', DepertmentsSchema);