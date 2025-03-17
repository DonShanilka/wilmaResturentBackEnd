const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/product/saveProducts', productController.createProduct);
router.post('/product/getAllProduct', productController.getAllProduct);

module.exports = router;
