const express = require('express');

const app = express();
const bodyPaser = require('body-parser')
const routerProducts = require('./src/routes/products.js')

app.use(bodyPaser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
});

app.use('/v1/costumer', routerProducts)

app.listen(4000)