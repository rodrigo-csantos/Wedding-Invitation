const router = require('express').Router()

const controllerGiftList = require('../controllers/giftList.controller')

router.get('/gifts', controllerGiftList.findAll)

router.post('/select/:id', controllerGiftList.updateSelectedGift)

module.exports = router