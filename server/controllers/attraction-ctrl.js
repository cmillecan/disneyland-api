const Attraction = require('../models/attraction-model')

const createAttraction = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an attraction',
    })
  }

  const attraction = new Attraction(body)

  if (!attraction) {
    return res.status(400).json({ success: false, error: err })
  }

  attraction
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: attraction._id,
        message: 'Attraction Created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Attraction not created!',
      })
    })
}

const updateAttraction = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  Attraction.findOne({ _id: req.params.id }, (err, attraction) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Attraction not found!',
      })
    }
    attraction.name = body.name
    attraction.date = body.date
    attraction
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: attraction._id,
          message: 'Attraction updated!',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Attraction not updated!',
        })
      })
  })
}

const deleteAttraction = async (req, res) => {
  await Attraction.findOneAndDelete({ _id: req.params.id}, (err, attraction) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!attraction) {
      return res
        .status(404)
        .json({ success: false, error: `Attraction not found` })
    }

    return res.status(200).json({ success: true, data: attraction })
  }).catch(err => console.log(err))
}

const getAttractionById = async (req, res) => {
  await Attraction.findOne({ _id: req.params.id }, (err, attraction) => {
    if (err) {
      return res
        .status(400)
        .json({ success: false, error: err })
    }

    if (!attraction) {
      return res
        .status(404)
        .json({ success: false, error: `Attraction not found `})
    }
    return res
      .status(200)
      .json({ success: true, data: attraction })
  }).catch(err => console.log(err))
}

const getAttractions = async (req, res) => {
  await Attraction.find({}, (err, attractions) => {
    if (err) {
      return res
        .status(400)
        .json({success: false, error: err})
    }

    if (!attractions.length) {
      return res
        .status(404)
        .json({ success: false, error: `Attraction not found` })
    }
    return res
      .status(200)
      .json({ success: true, data: attractions })
  }).catch(err => console.log(err))
}

const searchAttractions = async (req, res) => {
  const query = req.query.q

  await Attraction.find({ name: new RegExp(escapeRegex(query), 'i') }, (err, attractions) => {
    if (err) {
      return res.status(500).json({success: false, error: err})
    }

    return res.status(200).json({success: true, data: attractions})
  }).exec()

}

const escapeRegex = (str) => {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = {
  createAttraction,
  updateAttraction,
  deleteAttraction,
  getAttractionById,
  getAttractions,
  searchAttractions,
}