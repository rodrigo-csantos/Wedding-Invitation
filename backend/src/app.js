const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', '..','frontend')))

const routerPages = require('./routes/pages.router')
app.use(routerPages)

const routerGifts = require('./routes/giftList.router')
app.use(routerGifts)

module.exports = app