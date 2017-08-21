import axios from 'axios'
import uuid from 'uuid4'

const baseUrl = process.env.NOVELIZR_BASE_CHARACTER_URL

export const loadCharacters = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

export const createCharacter = character => {
    character.id = uuid()
    return axios.post(baseUrl, character)
        .then(response => response.data)
}

export const updateCharacter = character => {
    return axios.put(`${baseUrl}/${character.id}`, character)
        .then(response => response.data)
}

export const deleteCharacter = id => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}
