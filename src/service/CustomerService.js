const Customer = require('../models/CustomerModel');

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
    console.log("Updating Customer:", id, customerData);
    
    const updatedCustomer = await Customer.findByIdAndUpdate(id, customerData, { new: true });

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
  return await Customer.findById(id); 
}

module.exports = {addCustomer, updateCustomer, deleteCustomer, getAllCustomers, getCustomerById};