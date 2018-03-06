const Book = require('../models/model.book')

module.exports = {
    showBooks (req, res){
        Book.find().exec().then(data=>{
            console.log(data)
            res.status(200).json({
                message:'show all books',
                data,
            })
        })
    },
    addBook (req, res){
        const {isbn, title, author, category, stock} = req.body
        const book = new Book()

        book.isbn  = isbn
        book.title = title
        book.author = author
        book.category = category
        book.stock = stock
        book.save().then(newBook=>{
            res.status(200).json({
                message : 'new book created',
                newBook
            })
        }).catch(err=>{
            res.status(500).json({
                message : err.message
            })
        })
    },
    updateBook (req, res){
        Book.update({_id:req.params.id}, {$set:req.body}).then(updatedBook=>{
            res.status(200).json({
                message : 'book updated',
                updatedBook
            })
        }).catch(err=>{
            res.status(500).json({
                message:err.message
            })
        })
    },
    deleteBook (req, res){
        Book.findByIdAndRemove(req.params.id).then(data=>{
            res.status(200).json({
                message : 'book successfully deleted',
                data
            })
        }).catch(err=>{
            res.status(500).json({
                message:err.message
            })
        })
    },
}