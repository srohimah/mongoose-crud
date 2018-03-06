const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn : {type:String},
    title : {type:String},
    author : {type:String},
    category : {type:String},
    stock : {type:Number},
    //timestamps:true,
})
const Books = mongoose.model('Book',bookSchema)
module.exports = Books