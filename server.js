const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movie')
const movieRouter = require('./routes/movie-routes')

const PORT = 9999
const URL = ''

const app = express()
app.use(express.json())
app.use(movieRouter)

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connect to MongoDB')
    })
    .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`)
})
