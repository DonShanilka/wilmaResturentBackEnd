const Product = require('../models/productModel');
const mongoose = require("mongoose");

const createProduct = async (productData) => {
  console.log("Product Service :", productData  );
  try {
    const added = new Product({
      itemId: productData.itemId,
      name: productData.name,
      price: productData.price,
      description: productData.description,
      quantity: productData.quantity
    })
    const saved = await Product.create(added);
    return saved;
  } catch (error) {
    console.log("Error :", error);
  }
  return await Product.create(productData);
};

const updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

const getAllProduct = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

module.exports = { createProduct, getAllProduct, getProductById ,updateProduct, deleteProduct};
