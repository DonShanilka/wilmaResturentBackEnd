const OrderModel = require('../models/ordeModel');

const placeOrder = async (orderData) => {
  try {
    // Remove manual 'id' if it's null
    if (!orderData.id) {
      delete orderData.id;
    }

    const newOrder = new OrderModel(orderData);
    return await newOrder.save();
  } catch (error) {
    throw error;
  }
};

const getAllOrders = async () => {
  try {
    return await OrderModel.find();
  } catch (error) {
    throw error;
  }
};

module.exports = { placeOrder, getAllOrders };
