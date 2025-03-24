const Customer = require('../models/CustomerModel');
const mongoose = require("mongoose");


const addCustomer = async (customerData) => {
  console.log("Customer Service :",customerData);
  try{
    const added = new Customer({
      id: customerData.customer_id,
      name: customerData.customer_name,
      address: customerData.customer_address,
      mobile: customerData.mobile
    })
    const saved = await Customer.create(added);
    return saved;
  }catch(error){
    console.log("Error :",error);
  }
};

const updateCustomer = async (id, customerData) => {
  try {
    console.log("Updating Customer in Service:", id, customerData);

    // Ensure the 'id' is a valid ObjectId string
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid customer ID");
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { $set: customerData }, // Use $set to specify fields to update
      { new: true, runValidators: true } // 'new' returns the updated doc, 'runValidators' applies schema validations
    );

    if (!updatedCustomer) {
      throw new Error("Customer not found");
    }

    return updatedCustomer;
  } catch (error) {
    console.error("Error in CustomerService update:", error);
    throw new Error("Failed to update customer");
  }
};

const deleteCustomer = async (id) => {
  return await Customer.findByIdAndDelete(id);
};

const getAllCustomers = async () => {
  try {
    console.log("Service GetAllCustomers Called");
    return await Customer.find();
  } catch (error) {
    console.error("Error in CustomerService:", error);
    throw new Error("Failed to fetch customers");
  }
};

const getCustomerById = async (id) => {
  try {
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }

    const customer = await Customer.findById(id);

    return customer; 
  } catch (error) {
    console.error('Error fetching customer:', error);
    throw new Error('Failed to fetch customer in getCustomerById');
  }
}

module.exports = {addCustomer, updateCustomer, deleteCustomer, getAllCustomers, getCustomerById};