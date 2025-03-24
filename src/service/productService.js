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
    throw new Error("Failed to Save product");
  }
};

const updateProduct = async (id, productData) => {
  try {
    console.log("Updateting Product in Service:", id, productData);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid Product ID");
    }

    const updateProduct = await Product.findByIdAndUpdate(
      id, 
      {$set: productData}, 
      {new: true, runValidators: true}
    );

    if(!updateProduct) {
      throw new Error("Product not found");
    }
    return updateProduct;
  } catch (error) {
    console.log("Error :", error);
    throw new Error("Failed to update product");
  }
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

const getAllProduct = async () => {
  try {
    console.log("Service GetAllProduct Called");
    return await Product.find();
  } catch (error) {
    console.error("Error in ProductService:", error);
    throw new Error("Failed to fetch product");
  }
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

module.exports = { createProduct, getAllProduct, getProductById ,updateProduct, deleteProduct};
