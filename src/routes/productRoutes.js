const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/product/saveProducts', productController.createProduct);
router.get('/product/getAllProducts', productController.getAllProduct);
router.get('/product/getProductById/:id', productController.getProductById);

module.exports = router;
