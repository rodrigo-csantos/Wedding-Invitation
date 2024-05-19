const router = require('express').Router()

const controllerGiftList = require('../controllers/giftList.controller')

router.get('/gifts', controllerGiftList.findAll)

router.post('/:id/select', controllerGiftList.updateSelectedGift)

module.exports = router