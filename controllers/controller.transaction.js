const Transaction = require('../models/model.transaction')
const moment = require('moment')

module.exports = {
    showTransactions (req, res){
        Transaction.find().populate('booklist').populate('member').exec().then(dataTransaction=>{
            console.log(dataTransaction)
            res.status(200).json({
                message:'show all transactions',
                dataTransaction,
            })
        })
    },
    addTransaction (req, res){
        const {member, days, book} = req.body
        const transaction = new Transaction()

        transaction.member  = member
        transaction.days = days
        transaction.due_date = moment().add(days,'day')
        transaction.booklist = req.body.book
        transaction.save().then(newTransaction=>{
            res.status(200).json({
                message : 'new transaction created',
                newTransaction
            })
        }).catch(err=>{
            res.status(500).json({
                message : err.message
            })
        })
    },
    returnBook (req, res){
        Transaction.findById(req.params.id).then(dataTransaction=>{
            dataTransaction.in_date = moment().format()
            let fine = 0;
            let diff = moment(dataTransaction.in_date).diff(moment(dataTransaction.due_date),'day')
            console.log(dataTransaction.due_date)
            console.log(dataTransaction.in_date)
            console.log(diff)
            if(diff>0){
                fine = 500 * diff * dataTransaction.booklist.length
            }
            dataTransaction.fine = fine
            dataTransaction.save()
            res.send(dataTransaction)
        }).catch(err=>{
            res.send(err.message)
        })
    },
    deleteTransaction (req, res){
        Transaction.findByIdAndRemove(req.params.id).then(data=>{
            res.status(200).json({
                message : 'transaction successfully deleted',
                data
            })
        }).catch(err=>{
            res.status(500).json({
                message:err.message
            })
        })
    },
}