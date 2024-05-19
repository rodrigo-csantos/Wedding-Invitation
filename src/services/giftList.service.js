const {giftList} = require('../models')

const findAll = async ()=> {
    const gifts = await giftList.findAll()
    return gifts
}

module.exports = {
    findAll
}