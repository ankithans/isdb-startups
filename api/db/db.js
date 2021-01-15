const mongoose = require('mongoose')
require("dotenv").config();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify: false})
    .then((result) => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    });

    

module.exports = mongoose.createConnection(dbURI,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
        console.log('Connected to db for pdf')
})