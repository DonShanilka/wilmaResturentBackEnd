const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  orderDate: { type: Date, required: true, default: Date.now },
  customerId: { type: String, required: true },
  total: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  subTotal: { type: Number, required: true },
  cash: { type: Number, required: true },
  balance: { type: Number, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
