const mongoose = require('mongoose')

const investmentSchema = new mongoose.Schema({
    startupID : { type : String},
    userID : { type : String},
    PaymentID : { type : String},
    investMoney : { type : String},
    typeOfInvestment : { type : String}
})

module.exports = mongoose.model('invest', investmentSchema)