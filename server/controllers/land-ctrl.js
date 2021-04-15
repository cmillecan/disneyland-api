const Land = require('../models/land-model')

const createLand = (req, res) => {
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

const updateLand = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Land.findOne({ _id: req.params.id }, (err, land) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Land not found!',
            })
        }
        land.name = body.name
        land.date = body.date
        land
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: land._id,
                    message: 'Land updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Land not updated!',
                })
            })
    })
}

const deleteLand = async (req, res) => {
    await Land.findOneAndDelete({ _id: req.params.id}, (err, land) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!land) {
            return res
                .status(404)
                .json({ success: false, error: `Land not found` })
        }

        return res.status(200).json({ success: true, data: land })
    }).catch(err => console.log(err))
}

const getLandById = async (req, res) => {
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

const getLands = async (req, res) => {
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

const searchLands = async (req, res) => {
    const query = req.query.q

    await Land.find({ name: new RegExp(escapeRegex(query), 'i') }, (err, lands) => {
        if (err) {
            return res.status(500).json({success: false, error: err})
        }

        return res.status(200).json({success: true, data: lands})
    }).exec()

}

const escapeRegex = (str) => {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = {
    createLand,
    updateLand,
    deleteLand,
    getLandById,
    getLands,
    searchLands,
}

