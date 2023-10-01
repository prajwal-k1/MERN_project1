const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config')
const bookRouter = require('./routes/book')
const cors = require('cors')

//this to to use json formating for data
app.use(express.json())

//handle CORS error, allow all origin to make calls
app.use(cors())

//For allowing custom origin
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-type']
// }))

mongoose
    .connect(db)
    .then(() => {
        try {
            console.log('connected to DB')
            app.listen(3000, () => console.log('connected to port 3000'))
        } catch (err) {
            console.log({ message: err.message })
        }
    })

app.use('/book', bookRouter)