const Product = require('../models/Product'); // Assuming you have a Product model

const createProduct = async (productData) => {
  return await Product.create(productData);
};

module.exports = { createProduct };
