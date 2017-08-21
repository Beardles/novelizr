import axios from 'axios'

const baseUrl = process.env.NOVELIZR_BASE_CHARACTER_CARD_URL

export const fetchCharacterCards = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

export const createCharacterCard = characterCard => {
    return axios.post(baseUrl, characterCard)
        .then(response => response.data)
}

export const updateCharacterCard = characterCard => {
    return axios.put(`${baseUrl}/{$characterCard.id}`, characterCard)
        .then(response => response.data)
}

export const deleteCharacterCard = id => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}