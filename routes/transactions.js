const express = require('express')
const router = express.Router()
const {showTransactions, addTransaction, returnBook, deleteTransaction} = require('../controllers/controller.transaction')

router.get('/showTransactions',showTransactions)
router.post('/addTransaction',addTransaction)
router.get('/returnBook/:id',returnBook)
router.delete('/deleteTransaction/:id',deleteTransaction)

module.exports = router