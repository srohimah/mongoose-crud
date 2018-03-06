const express = require('express')
const router = express.Router()
const Book = require('../models/model.book')
const {showBooks, addBook, updateBook, deleteBook} = require('../controllers/controller.book')

router.get('/showBooks',showBooks)
router.post('/addBook',addBook)
router.put('/updateBook/:id',updateBook)
router.delete('/deleteBook/:id',deleteBook)

module.exports = router