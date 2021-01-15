const mongoose = require('mongoose')


const startupSchema = new mongoose.Schema({
    userid : {type: String},
    image: {type: String},
    title: {type: String},
    founder : {type: String},
    description : {type: String},
    problemItSolves : {type: String},
    workType: {type: String},
    location : {type: String},
    contactmail : {type: String},
    stars: [],
    reviews : []
})

module.exports = mongoose.model('startup',startupSchema)