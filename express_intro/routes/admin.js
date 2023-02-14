const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const productsController = require('../controllers/products');

// /admin/add-product get
router.get('/add-product',productsController.showAddProductPage);

// /admin/add-product post
router.post('/add-product',productsController.postAddProductPage);


module.exports = router;