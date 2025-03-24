const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController');

router.post('/order/saveOrder', orderController.placeOrder);
router.get('/order/getAllOrders', orderController.getAllOrders);
router.get('/order/getOrderById/:id', orderController.getOrderById);

module.exports = router;