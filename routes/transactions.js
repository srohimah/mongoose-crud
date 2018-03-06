const express = require('express')
const router = express.Router()
const {showTransactions, addTransaction, returnBook, deleteTransaction} = require('../controllers/controller.transaction')

router.get('/',showTransactions)
router.post('/',addTransaction)
router.get('/:id',returnBook)

module.exports = router