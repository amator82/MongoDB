const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieShema = new Shema({
    title: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    genres: [String],
    rating: Number,
    duration: {
        hours: Number,
        minutes: Number
    },
    reviews: [
        {
            name: String,
            text: String
        }
    ]
})

const Movie = mongoose.model('Model', movieShema)

module.exports = Movie
