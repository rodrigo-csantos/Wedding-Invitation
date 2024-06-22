import {getGifts, selectGift} from './api.js'

async function renderGiftList () {
    const gifts = await getGifts()
    const giftList = document.getElementById('gift-list')
    giftList.innerHTML = ''

    gifts.forEach((gift)=> {
        const listItem = document.createElement('li')
        
        const img = document.createElement('img')
        const src = `./assets/images/giftsImages/${gift.idImage}.jpg`
        img.src = src
        img.classList.add('gift-image')
        listItem.appendChild(img)

        const textNode = document.createElement('span');
        textNode.textContent = gift.giftName;
        listItem.appendChild(textNode);

        if (gift.selected) {
            textNode.textContent += ' - Item já selecionado'
            textNode.classList.add('selected-gift')
        } else {
            const button = document.createElement('button')
            button.classList.add('select');
            button.textContent = 'Selecionar'
            listItem.appendChild(button)
            
            const dialog = document.createElement('dialog')
            dialog.classList.add('gift-dialog')

            const input = document.createElement('input')
            input.classList.add('gift-input')
            input.placeholder = 'Seu nome aqui';
            dialog.appendChild(input)

            const button2 = document.createElement('button')
            button2.textContent = 'Confirmar presente'
            button2.classList.add('confirm-button')
            dialog.appendChild(button2)

            const button3 = document.createElement('button')
            button3.textContent = 'Cancelar'
            button3.classList.add('cancel-button')
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