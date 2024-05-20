const baseURL = 'http://localhost:3001';

export const getGifts = async () => {
    try {
        const response = await fetch(`${baseURL}/gifts`);
        if (!response.ok) {
            throw new Error('Erro ao obter presentes');
        }
        const gifts = await response.json();
        return gifts;
    } catch (error) {
        console.error('Erro ao obter presentes:', error);
        return [];
    }
};

export const selectGift = async (id, guestName) => {
    try {
        const requestBody = {
            giftGiver: guestName
        }

        const response = await fetch(`${baseURL}/select/${id}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody) 
        })
        if (!response.ok) {
            throw new Error('Erro ao selecionar presente');
        }
        const selectedGift = await response.json();
        return selectedGift;
    } catch (error) {
        console.error('Erro ao selecionar presente:', error);
        return null;
    }
}
