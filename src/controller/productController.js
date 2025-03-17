const productService = require('../service/productService');

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const product = await productService.getAllProduct();
    res.status(200).json(product);
  } catch (eror) {
    res.status(400).json({error: error.message});
  }
}

module.exports = { createProduct, getAllProduct };
