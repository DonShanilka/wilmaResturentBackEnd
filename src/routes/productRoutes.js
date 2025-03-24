const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/item/saveItems', productController.createProduct);
router.get('/item/getAllItems', productController.getAllProduct);
router.get('/item/getItemsById/:id', productController.getProductById);
router.put('/item/updateItems/:id', productController.updateProduct);
router.delete('/item/deleteItems/:id', productController.deleteProduct);

module.exports = router;
