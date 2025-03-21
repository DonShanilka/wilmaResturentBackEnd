const orderService = require('../service/OrderService');  

const placeOrder = async(req, res) => {
  try {
    const order = await orderService.placeOrder(req.body);
    res.status(200).json(order);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllOrders = async(req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).jscon(orders);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}

const getOrderById = async(req, res) => {
  const {id} = req.params;

  try {
    const order = await orderService.getOrderById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}