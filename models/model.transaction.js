const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member :  {type: Schema.Types.ObjectId, ref:'Customer'},
    days :Number,
    out_date : {type: Date, default:Date.now},
    due_date : Date,
    in_date : {type: Date, default:null},
    fine : {type:Number, default : 0},
    booklist : [{type: Schema.Types.ObjectId, ref:'Book'}]
    //timestamps:true,
})
const Transaction = mongoose.model('Transaction',transactionSchema)
module.exports = Transaction