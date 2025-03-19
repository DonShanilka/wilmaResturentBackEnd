const Customer = require('../models/CustomerModel');  

const addCustomer = async (customerData) => {
  console.log(customerData);
  return await Customer.create(customerData);
}