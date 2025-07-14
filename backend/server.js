const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const serviceRoutes = require('./routes/service');
const orderRoutes = require('./routes/order');

const app = express();

mongoose.connect('mongodb+srv://balkishan0107sharma:hqlaExu58bxV6zAx@cluster0.vrfvxjd.mongodb.net/pooja-samagri?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/orders', orderRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
