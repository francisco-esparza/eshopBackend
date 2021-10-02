const express = require('express');
const router = express.Router();

const products = require('../../controllers/products.controller');

router
    .route('/')
    .get(products.getListProducts)

router
    .route('/detail')
    .get(products.getDetailProduct)

router
    .route('/category')
    .get(products.getListProductsForCategory)

module.exports = router;