const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')
const books = require('./routes/books')
const customers = require('./routes/customers')
const transactions = require('./routes/transactions')

const app = express()
let url = 'mongodb://localhost:27017/library'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url, err=>{
    if(!err){
        console.log('connected');
    }else{
        throw new Error('unconnected')        
    }
})

app.use('/books', books)
app.use('/customers', customers)
app.use('/transactions', transactions)

app.listen(3000,()=>console.log('listening 3000'))