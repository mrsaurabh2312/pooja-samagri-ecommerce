const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', async (req, res) => {
    const { userId, items, serviceId, total } = req.body;
    const order = new Order({ userId, items, serviceId, total });
    await order.save();
    res.json(order);
});

router.get('/user/:userId', async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId }).populate('items.productId').populate('serviceId');
    res.json(orders);
});

module.exports = router;
