const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config')
const bookRouter = require('./routes/book')

//this to to use json formating for data
app.use(express.json())

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