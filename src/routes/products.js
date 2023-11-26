const express = require('express');
const router = express.Router();
const productsCotrollers = require('../controllers/products')

// READ => GET
router.get('/products', productsCotrollers.readProducts)
// CREATE => POST
router.post('/products', productsCotrollers.GetAllProducts)


module.exports = router