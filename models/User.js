const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch'},
  // departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'departments' }],
  loginPin: { type: String, required: true },
  biometricId: { type: String }
});

module.exports = mongoose.model('User', userSchema);
