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
            listItem.appendChild(button)
            
            const dialog = document.createElement('dialog')
            const input = document.createElement('input')
            input.placeholder = 'Seu nome aqui';
            dialog.appendChild(input)
            const button2 = document.createElement('button')
            button2.textContent = 'Confirmar presente'
            dialog.appendChild(button2)
            const button3 = document.createElement('button')
            button3.textContent = 'Cancelar'
            dialog.appendChild(button3)
            listItem.appendChild(dialog)

            button.onclick = ()=> {
                dialog.showModal()
            }

            button2.onclick = async () => {
                const guestName = input.value
                if (guestName.trim() === '') {
                    alert('Por favor, insira seu nome.');
                    return
                }
                await selectGift(gift.idGift, guestName)
                button.remove()
                dialog.close()
                window.location.reload()
            }

            button3.onclick = ()=> dialog.close()
        }
        giftList.appendChild(listItem)
    })
}

window.onload = function() {
    renderGiftList ()
}