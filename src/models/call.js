const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({
    date: String
});

module.exports = mongoose.model('Call', CallSchema);