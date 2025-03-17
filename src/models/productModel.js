const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type : String,
    required : [true, "Please Enter Product Name"],
  },

  price: {
    type : Number,
    required : [true, "Please Enter Product Price"],
  },

  description: {
    type : String,
    required : [true, "Please Enter Product Description"],
  },

  quantity: {
    type : Number,
    required : [true, "Please Enter Product Stock"],
  },
});