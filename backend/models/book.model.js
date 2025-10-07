// backend/models/book.model.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number
});

module.exports = mongoose.model('Book', BookSchema);
