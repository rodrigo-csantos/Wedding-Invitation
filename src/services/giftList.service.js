const {giftList} = require('../models')

const findAll = async ()=> {
    const gifts = await giftList.findAll()
    return gifts
}

const updateSelectedGift = async (id, giftGiver)=> {
    const gift = await giftList.findByPk(id)
    if (gift) {
        gift.selected = true
        gift.giftGiver = giftGiver
        await gift.save()
        return true
    } else {
        return false
    }   
}

module.exports = {
    findAll,
    updateSelectedGift
}