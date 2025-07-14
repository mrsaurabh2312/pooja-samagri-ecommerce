const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        }
    ],
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
    total: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
