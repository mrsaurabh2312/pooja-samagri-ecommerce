const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

router.get('/', async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

router.post('/', async (req, res) => {
    const { name, description, price } = req.body;
    const serv = new Service({ name, description, price });
    await serv.save();
    res.json(serv);
});

module.exports = router;
