const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Attraction = new Schema(
    {
        name: { type: String, required: true },
        date: { type: String, required: false },
        height: { type: String, required: false },
        type: { type: String, required: false },
        duration: { type: String, required: false },
    }
)

module.exports = mongoose.model('attractions', Attraction)