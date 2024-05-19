const serviceGiftList = require('../services/giftList.service')

exports.findAll = async (_req, res)=> {
    const gifts = await serviceGiftList.findAll()
    return res.status(200).json(gifts)
}