const express = require('express');
const router = express.Router();
const customerController = require('../controller/CustomerController');

router.post('/customer/saveCustomer', customerController.addCustomer);
router.get('/customer/getAllCustomers', customerController.getAllCustomers);
router.get('/customer/getCustomerById/:id', customerController.getAllCustomers);
router.put('/customer/updateCustomer/:id', customerController.updateCustomer);
router.delete('/customer/deleteCustomer/:id', customerController.deleteCustomer);

module.exports = router;