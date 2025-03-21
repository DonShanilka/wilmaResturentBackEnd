const Oder = require('../model/Order');

const placeOrder = async (orderData) => {
  return await Oder.create(orderData);
}