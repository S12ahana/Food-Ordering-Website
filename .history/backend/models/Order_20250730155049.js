const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  items: [String],
  totalPrice: Number,
  address: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
