

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const Contact = require('./models/Contact');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// API endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { queryType, name, email, phone, isMember, message } = req.body;

        const newContact = new Contact({
            queryType,
            name,
            email,
            phone,
            isMember,
            message
        });

        await newContact.save();

        // ✅ This is the success response your frontend expects
        res.status(201).json({ message: 'Submitted Successfully to DB!' });
    } catch (err) {
        // ✅ Send error in similar JSON format
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});


app.listen(5000, () => console.log('Server running on port 5000'));
