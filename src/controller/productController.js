const productService = require("../service/productService");

const createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const product = await productService.createProduct(productData);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const productData = req.body;

    const updateProduct = await productService.updateProduct(id, productData);

    if (!updateProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updateProduct);
  } catch (error) {
    console.error("Error updating Product:", error);
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productService.deleteProduct(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllProduct = async (req, res) => {
  try {
    const product = await productService.getAllProduct();
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const itemId = req.params.id;
    console.log('Received ID:', itemId); // Log the ID to verify it's correct
    const item = await productService.getProductById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
    console.log('Item:', item);
    // return item;
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).send('Server error');
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
