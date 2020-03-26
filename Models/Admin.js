const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  loginid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Admin = mongoose.model('admin', AdminSchema);
