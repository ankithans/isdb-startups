const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const Startup = require('./models/startup')
const cors = require('cors')
require('./db/db')

// app congif

const app = express()

//  middleware

app.use(express.json())
app.use(cors())
app.use(cookieParser());


// app listening to port 

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// routes

app.get('/', (req, res) => {
    console.log("Hello")
    res.send("hello")
})
app.get('/startup', async (req,res) => {
    try {
        const startupList = await Startup.find()
        res.status(201).json(startupList)
    } catch (err) {
        // console.log(err.message)
        const errors = handleError(err)
        res.status(400).json({ errors });
    }
});

app.use('/user',require('./routes/userroutes'))
