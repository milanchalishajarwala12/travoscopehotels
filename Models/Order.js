const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  roomnumber: {
    type: Number,
    required: true,
  },
  orderdetails: {
    type: Object,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  orderdate: {
    type: String,
    default: Date.now(),
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
