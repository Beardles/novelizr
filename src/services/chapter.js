import axios from 'axios'

const baseUrl = 'http://localhost:8080/chapters'

export const loadChapters = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

export const createChapter = chapter => {
    chapter.id = chapter.number
    return axios.post(baseUrl, chapter)
        .then(response => response.data)
}

export const updateChapter = chapter => {
    return axios.put(`${baseUrl}/${chapter.id}`, chapter)
        .then(response => response.data)
}

export const deleteChapter = id => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}