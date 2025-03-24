const Order = require('../models/ordeModel');

const placeOrder = async (orderData) => {
  return await Order.create(orderData);
}

const getAllOrders = async () => {
  return await Order.find();
} 

const getOrderById = async (id) => {
  return await Order.findById(id);     
}

module.exports = { placeOrder, getAllOrders, getOrderById };