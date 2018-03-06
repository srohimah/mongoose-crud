const express = require('express')
const router = express.Router()
const {showCustomers, addCustomer, updateCustomer, deleteCustomer} = require('../controllers/controller.customer')

router.get('/showCustomers',showCustomers)
router.post('/addCustomer',addCustomer)
router.put('/updateCustomer/:id',updateCustomer)
router.delete('/deleteCustomer/:id',deleteCustomer)

module.exports = router