const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    itemId:{
      type: String,
      required: [true, "Please Enter Product ID"],
    },
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
