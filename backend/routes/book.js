const express = require('express')
const router = express.Router()
const Book = require('../models/book')

//Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Get book by id
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (book == null)
            res.status(404).json({ message: 'Book not found' })
        res.status(200).json(book)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Create new book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear)
            res.status(400).json({ message: 'Please enter details properly' })
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        })
        console.log(book)
        await book.save()
        res.status(201).json({ message: 'Book created successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Update book by ID
router.patch('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear)
            res.status(400).json({ message: 'Please enter details properly' })
        let b1 = await Book.findById(req.params.id)
        if (b1 == null)
            res.status(404).json({ message: 'Book not found' })
        const result = await b1.updateOne(req.body)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Delete book by id
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (book == null)
            res.status(404).json({ message: 'Book not found' })
        const result = await book.deleteOne()
        //const result = book.deleteOne(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router