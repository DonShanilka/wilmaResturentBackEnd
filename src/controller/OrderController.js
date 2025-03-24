const orderService = require('../service/OrderService');  

const placeOrder = async(req, res) => {
  const orderData = req.body;
  try {
    const order = await orderService.placeOrder(orderData);
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
  const orderId = req.params.id; 
  try {
    console.log("Controller: getCustomerById Called", orderId); 
    const order = await CustomerService.getCustomerById(customerId); 
    if (order) {
      res.json({ name: order.name, address: order.address, mobile: order.mobile });
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (error) {
    console.error('Error fetching customer details:', error);
    res.status(500).send('Server error');
  }
}

module.exports = { placeOrder, getAllOrders, getOrderById };