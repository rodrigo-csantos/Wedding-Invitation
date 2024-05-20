import {getGifts, selectGift} from './api.js'

async function renderGiftList () {
    const gifts = await getGifts()
    const giftList = document.getElementById('gift-list')
    giftList.innerHTML = ''

    gifts.forEach((gift)=> {
        const listItem = document.createElement('li')
        listItem.textContent = gift.giftName

        if (gift.selected) {
            listItem.textContent += ' - Item já selecionado'
            listItem.classList.add('selected-gift')
        } else {
            const button = document.createElement('button')
            button.textContent = 'Selecionar'
            button.onclick = async () => {
                await selectGift(gift.idGift)
                button.remove()
            }
            listItem.appendChild(button)
        }
        giftList.appendChild(listItem)
    })
}

window.onload = function() {
    renderGiftList ()
}