const express = require('express');
const router = express.Router();
const productsCotrollers = require('../controllers/products')

// READ => GET
router.get('/products', productsCotrollers.GetAllProducts)
// CREATE => POST
router.post('/product', productsCotrollers.createProduct)


module.exports = router