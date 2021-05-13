const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Land = new Schema(
  {
    name: { type: String, required: true, index: true },
    date: { type: Date, required: false },
    attractions: { type: String, required: false, index: true}
  }
)

module.exports = mongoose.model('lands', Land)