const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    userid : { type: String},
    star : { type: Number},
    review : { type:String}
})

module.exports = mongoose.model('review',reviewSchema)