const express = require('express')

const LandCtrl = require('../controllers/land-ctrl')

const router = express.Router()

router.post('/lands', LandCtrl.createLand)
router.put('/lands/:id', LandCtrl.updateLand)
router.delete('/lands/:id', LandCtrl.deleteLand)
router.get('/lands/:id', LandCtrl.getLandById)
router.get('/lands', LandCtrl.getLands)
router.get('/search', LandCtrl.searchLands)

module.exports = router