const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    queryType: String,
    name: String,
    email: String,
    phone: String,
    isMember: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Force collection name as 'query'
module.exports = mongoose.model('Contact', contactSchema, 'query');
