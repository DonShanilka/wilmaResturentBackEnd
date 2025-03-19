const CustomerService = require('../service/CustomerService');

const addCustomer = async (req, res) => {
  try {
    const customer = await CustomerService.addCustomer(req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}