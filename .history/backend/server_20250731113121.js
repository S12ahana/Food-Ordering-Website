

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



mongoose.connect('mongodb+srv://<username>:<password>@query.mongodb.net/OnlineFoodDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    const contact = new Contact({
        queryType: 'test',
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        isMember: 'yes',
        message: 'This is a test message.'
    });

    await contact.save();
    console.log("✅ Test Contact Saved");
    mongoose.disconnect();
})
.catch(err => console.error("Connection/Test Error:", err));
