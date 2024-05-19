const serviceGiftList = require('../services/giftList.service')

exports.findAll = async (_req, res)=> {

    try {
        const gifts = await serviceGiftList.findAll()
        return res.status(200).json(gifts)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.updateSelectedGift = async (req, res)=> {
    try {
        const updatedGift = await serviceGiftList.updateSelectedGift(req.params.id, req.body.giftGiver)
        if (!updatedGift) {
            return res.status(404).json({message: 'gift not found'})
        }
        return res.status(200).json({message: 'gift updated successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}