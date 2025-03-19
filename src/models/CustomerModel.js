const mongoos = require('mongoose');

const CustomerSchema = mongoos.Schema({
  id: {
    type: String,
    required: [true, "Please Enter Customer ID"]
  },
  name: {
    type: String,
    required: [true, "Please Enter Customer Name"]
  },
  address: {
    type: String,
    required: [true, "Please Enter Customer Address"]
  },
  mobile: {
    type: Number,
    required: [true, "Please Enter Customer Mobile Number"]
  }
},
{
  timestamps: true,
})

const Customer = mongoos.model('Customer', CustomerSchema);
module.exports = Customer;