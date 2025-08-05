const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});



router.post('/', (req, res) => {
  const { name, address, dish } = req.body;
  console.log("Received order:", { name, address, dish });

  // Save to DB if needed here...

  res.status(200).json({ message: 'Order received' });
});

module.exports = router;

module.exports = router;
