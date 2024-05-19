const router = require('express').Router()

const controllerGiftList = require('../controllers/giftList.controller')

router.get('/gifts', controllerGiftList.findAll)

module.exports = router