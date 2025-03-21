const Order = require('../model/Order');

const placeOrder = async (orderData) => {
  return await Order.create(orderData);
}

const getAllOrders = async () => {
  return await Order.find();
} 