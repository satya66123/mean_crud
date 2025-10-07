// backend/routes/book.routes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

// CREATE
router.post('/', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// READ ONE
router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

module.exports = router;
