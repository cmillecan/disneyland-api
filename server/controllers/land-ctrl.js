const Land = require('../models/land-model')

createLand = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a land',
    })
  }

  const land = new Land(body)

  if (!land) {
    return res.status(400).json({ success: false, error: err })
  }

  land
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: land._id,
          message: 'Land Created!',
        })
      })
      .catch(error => {
        return res.status(400).json({
          error,
          message: 'Land not created!',
        })
      })
}

deleteLand = async (req, res) => {
  await Land.findOneAndDelete({ _id: req.params.id}, (err, movie) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!movie) {
      return res
          .status(404)
          .json({ success: false, error: `Movie not found` })
    }

    return res.status(200).json({ success: true, data: movie })
  }).catch(err => console.log(err))
}

getLandById = async (req, res) => {
  await Land.findOne({ _id: req.params.id }, (err, land) => {
    if (err) {
      return res
          .status(400)
          .json({ success: false, error: err })
    }

    if (!land) {
      return res
          .status(404)
          .json({ success: false, error: `Land not found `})
    }
    return res
        .status(200)
        .json({ success: true, data: land })
  }).catch(err => console.log(err))
}

getLands = async (req, res) => {
  await Land.find({}, (err, lands) => {
    if (err) {
      return res
          .status(400)
          .json({success: false, error: err})
    }

    if (!lands.length) {
      return res
          .status(404)
          .json({ success: false, error: `Land not found` })
    }
    return res
        .status(200)
        .json({ success: true, data: lands })
  }).catch(err => console.log(err))
}

getAttractions = async (req, res) => {
  await Attraction.find({}, (err, attractions) => {
    if (err) {
      return res
          .status(400)
          .json( { success: false, error: err } )
    }

    if (!attractions.length) {
      return res
          .status(404)
          .json({ success: true, data: attractions })
    }
    return res.status(200)
        .json( { success: true, data: attractions })
  }).catch(err => console.log(err))
}

module.exports = {
  createLand,
  deleteLand,
  getLandById,
  getLands,
  getAttractions,
}

