const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/product/saveProducts', productController.createProduct);

module.exports = router;
