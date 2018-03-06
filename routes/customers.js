const express = require('express')
const router = express.Router()
const {showCustomers, showCustomerById, addCustomer, updateCustomer, deleteCustomer} = require('../controllers/controller.customer')

router.get('/',showCustomers)
router.get('/:id',showCustomerById)
router.post('/',addCustomer)
router.put('/:id',updateCustomer)
router.delete('/:id',deleteCustomer)

module.exports = router