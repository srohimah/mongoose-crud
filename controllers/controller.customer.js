const Customer = require('../models/model.customer')

module.exports = {
    showCustomers (req, res){
        Customer.find().exec().then(dataCustomer=>{
            console.log(dataCustomer)
            res.status(200).json({
                message:'show all customer',
                dataCustomer,
            })
        })
    },
    showCustomerById (req, res){
        Customer.findById(req.params.id).then(data=>{
            res.status(200).json({
                message : 'data found',
                data
            })
        }).catch(err=>{
            res.send(err.message)
        })
    },
    addCustomer (req, res){
        const {name, memberid, address, zipcode, phone} = req.body
        const customer = new Customer()

        customer.name  = name
        customer.memberid = memberid
        customer.address = address
        customer.zipcode = zipcode
        customer.phone = phone
        customer.save().then(newCustomer=>{
            res.status(200).json({
                message : 'new customer created',
                newCustomer
            })
        }).catch(err=>{
            res.status(500).json({
                message : err.message
            })
        })
    },
    updateCustomer (req, res){
        Customer.update({_id:req.params.id}, {$set:req.body}).then(updatedCustomer=>{
            res.status(200).json({
                message : 'customer successfully updated',
                updatedCustomer
            })
        }).catch(err=>{
            res.status(500).json({
                message:err.message
            })
        })
    },
    deleteCustomer (req, res){
        Customer.findByIdAndRemove(req.params.id).then(data=>{
            res.status(200).json({
                message : 'customer successfully deleted',
                data
            })
        }).catch(err=>{
            res.status(500).json({
                message:err.message
            })
        })
    },
}