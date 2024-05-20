const axios = require('axios')
const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const getGifts = async () => {
    const gifts = await api.get('/gifts')
    return gifts.data
}

const selectGift = async () => {
    const selectedGift = await api.post('/:id/select')
    return selectedGift.data
}

module.exports = {
    getGifts,
    selectGift,
    api
}