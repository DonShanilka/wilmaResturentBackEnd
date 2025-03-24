const Order = require('../models/ordeModel');

const placeOrder = async (orderData) => {
  try {
    const added = new Order({
      id: orderData.orderId,
      orderDate: orderData.orderDate,
      customerId: orderData.customerId,
      total: orderData.total,
      discount: orderData.discount,
      subTotal: orderData.subTotal,
      cash: orderData.cash,
      balance: orderData.balance
    })
    const saved = await Order.create(added);
    return saved;
  } catch (error) {
    console.log("Error in OrderService:", error);
    throw new Error("Failed to place order");
  }
}

const getAllOrders = async () => {
  try {
    return await Order.find();
  } catch (error) {
    console.error("Error in OrderService:", error);
    throw new Error("Failed to fetch orders");
  }
} 

const getOrderById = async (id) => {
  return await Order.findById(id);     
}

module.exports = { placeOrder, getAllOrders, getOrderById };