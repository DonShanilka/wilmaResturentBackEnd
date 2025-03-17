const Product = require('../models/productModel'); // Assuming you have a Product model

const createProduct = async (productData) => {
  console.log(productData);
  return await Product.create(productData);
};

module.exports = { createProduct };
