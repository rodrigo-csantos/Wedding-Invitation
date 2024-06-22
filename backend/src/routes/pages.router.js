const router = require('express').Router()

const controllerPages = require('../controllers/pages.controller')

router.get('/', controllerPages.wellcome)

router.get('/gift', controllerPages.giftList)

module.exports = router