const Product = require('../models/productModel'); // Assuming you have a Product model

const createProduct = async (productData) => {
  console.log(productData);
  return await Product.create(productData);
};

const getAllProduct = async () => {
  return await Product.find();
}

const getProductById = async (id) => {
  return await Product.findById(id);
}

module.exports = { createProduct, getAllProduct, getProductById };
