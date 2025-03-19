const Customer = require('../models/CustomerModel');  

const addCustomer = async (customerData) => {
  console.log(customerData);
  return await Customer.create(customerData);
};

const updateCustomer = async (id, customerData) => {
  console.log(id, customerData);
  return await Customer.findByIdAndUpdate(id, customerData, {new: true});
};

const deleteCustomer = async (id) => {
  return await Customer.findByIdAndDelete(id);
};

const getAllCustomers = async () => {
  return await Customer.find();
}