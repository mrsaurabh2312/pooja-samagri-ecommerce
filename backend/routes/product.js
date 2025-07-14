const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    const { name, description, price, image } = req.body;
    const prod = new Product({ name, description, price, image });
    await prod.save();
    res.json(prod);
});

module.exports = router;
