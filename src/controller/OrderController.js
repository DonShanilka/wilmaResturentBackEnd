const orderService = require('../service/OrderService');  

const placeOrder = async(req, res) => {
  try {
    const order = await orderService.placeOrder(req.body);
    res.status(200).json(order);
  } catch(error) {
    res.status(400).json({ error: error.message });
  }
}