import * as api from '../services/characterCard'

// Action Constants
export const LOADED_CHARACTER_CARDS = '[Character Card] Loaded Character Cards'
export const SELECT_CHARACTER_CARD = '[Character Card] Select Character Card'
export const UPDATE_SELECTED_CHARACTER_CARD = '[Character Card] Update Selected Character Card'
export const ADD_CHARACTER_CARD = '[Character Card] Add Character Card'
export const REPLACE_CHARACTER_CARD = '[Character Card] Replace Character Card'
export const REMOVE_CHARACTER_CARD = '[Character Card] Remove Character Card'

// Action Creators
export const loadedCharacterCards = characterCards => ({ type: LOADED_CHARACTER_CARDS, payload: characterCards })
export const selectCharacterCard = characterCard => ({ type: SELECT_CHARACTER_CARD, payload: characterCard })
export const updateSelectedCharacterCard = characterCard => ({ type: UPDATE_SELECTED_CHARACTER_CARD, payload: characterCard })
export const addCharacterCard = characterCard => ({ type: ADD_CHARACTER_CARD, payload: characterCard })
export const replaceCharacterCard = characterCard => ({ type: REPLACE_CHARACTER_CARD, payload: characterCard })
export const removeCharacterCard = id => ({ type: REMOVE_CHARACTER_CARD, payload: id })

export const fetchCharacterCards = () => {
    return dispatch => {
        api.fetchCharacterCards()
            .then(characterCards => dispatch(loadedCharacterCards(characterCards)))
            .catch(e => console.log(e))
    }
}

export const createCharacterCard = characterCard => {
    return dispatch => {
        api.createCharacterCard(characterCard)
            .then(c => {
                dispatch(selectCharacterCard(null))
                dispatch(addCharacterCard(c))
            })
            .catch(e => console.log(e))
    }
}

export const updateCharacterCard = characterCard => {
    return dispatch => {
        api.updateCharacterCard(characterCard)
            .then(c => {
                dispatch(selectCharacterCard(null))
                dispatch(updateCharacterCard(characterCard))
            })
            .catch(e => console.log(e))
    }
}

export const deleteCharacterCard = id => {
    return dispatch => {
        api.deleteCharacterCard(id)
            .then(() => dispatch(removeCharacterCard(id)))
            .catch(e => console.log(e))
    }
}