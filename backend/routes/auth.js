const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hash });
        await user.save();
        res.json({ message: 'User registered' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid password' });
    res.json({ message: 'Login success', user: { id: user._id, name: user.name, isAdmin: user.isAdmin } });
});

module.exports = router;
