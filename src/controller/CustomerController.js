const CustomerService = require('../service/CustomerService');

const addCustomer = async (req, res) => {
  try {
    const customer = await CustomerService.addCustomer(req.body);
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
    const customers = await CustomerService.getAllCustomers();
    console.log(customers);
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}