const express = require('express')

const AttrCtrl = require('../controllers/attraction-ctrl')

const router = express.Router()

router.post('/attractions', AttrCtrl.createAttraction)
router.put('/attractions/:id', AttrCtrl.updateAttraction)
router.delete('/attractions/:id', AttrCtrl.deleteAttraction)
router.get('/attractions/:id', AttrCtrl.getAttractionById)
router.get('/attractions', AttrCtrl.getAttractions)
router.get('/search', AttrCtrl.searchAttractions)

module.exports = router