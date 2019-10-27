const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({
    date: String,
    number: number,
    from: string,
    to: string
});

module.exports = mongoose.model('Call', CallSchema);