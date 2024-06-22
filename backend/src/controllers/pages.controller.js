const {pageGiftList, pagehome} = require('../services/pages.service')

exports.wellcome = (_req, res) => res.status(200).sendFile(pagehome)

exports.giftList = (_req, res) =>  res.status(200).sendFile(pageGiftList)