const CustomerService = require('../service/CustomerService');

const addCustomer = async (req, res) => {
  const c = req.body;
  console.log(c)
  try {
    const customer = await CustomerService.addCustomer(c);
    console.log(customer);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const updateCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    const customer = await CustomerService.updateCustomer(id, req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    const customer = await CustomerService.deleteCustomer(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllCustomers = async (req, res) => {
  try {
    console.log("Controller: getAllCustomers Called");
    const customers = await CustomerService.getAllCustomers();
    console.log("Customers Fetched:", customers);
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error in Controller:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer
}