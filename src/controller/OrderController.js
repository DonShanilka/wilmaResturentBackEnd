const orderService = require('../service/OrderService');
const CustomerService = require('../service/CustomerService'); // Fix missing import

const placeOrder = async (req, res) => {
  const orderData = req.body;

  try {
    const order = await orderService.placeOrder(orderData);
    res.status(200).json(order);
  } catch (error) {
    console.error("Error in OrderService:", error);
    res.status(400).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders); // fixed typo: jscon -> json
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const customerId = req.params.id;

  try {
    console.log("Controller: getCustomerById Called", customerId);
    const customer = await CustomerService.getCustomerById(customerId);

    if (customer) {
      res.json({
        name: customer.name,
        address: customer.address,
        mobile: customer.mobile,
      });
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (error) {
    console.error('Error fetching customer details:', error);
    res.status(500).send('Server error');
  }
};

module.exports = { placeOrder, getAllOrders, getOrderById };
