import * as api from '../services/character'

// Action Constants
export const LOADED_CHARACTERS = '[Character] Loaded Characters'
export const SELECT_CHARACTER = '[Character] Select Character'
export const UPDATE_SELECTED_CHARACTER = '[Character] Update Selected Character'
export const ADD_CHARACTER = '[Character] Add Character'
export const REPLACE_CHARACTER = '[Character] Replace Character'
export const REMOVE_CHARACTER = '[Character] Remove Character'

// Action Creators
export const loadedCharacters = characters => ({ type: LOADED_CHARACTERS, payload: characters })
export const selectCharacter = character => ({ type: SELECT_CHARACTER , payload: character })
export const updateSelectedCharacter = value => ({ type: UPDATE_SELECTED_CHARACTER, payload: value })
export const addCharacter = character => ({ type: ADD_CHARACTER, payload: character })
export const replaceCharacter = character => ({ type: REPLACE_CHARACTER, payload: character })
export const removeCharacter = id => ({ type: REMOVE_CHARACTER, payload: id })

export const fetchCharacters = () => {
    return dispatch => {
        api.loadCharacters()
            .then(characters => dispatch(loadedCharacters(characters)))
            .catch(e => console.log(e))
    }
}

export const createCharacter = character => {
    return dispatch => {
        api.createCharacter(character)
            .then(c => {
                dispatch(selectCharacter(null))
                dispatch(addCharacter(c))
            })
            .catch(e => console.log(e))
    }
}

export const updateCharacter = character => {
    return dispatch => {
        api.updateCharacter(character)
            .then(c => {
                dispatch(selectCharacter(null))
                dispatch(replaceCharacter(c))
            })
            .catch(e => console.log(e))
    }
}

export const deleteCharacter = id => {
    return dispatch => {
        api.deleteCharacter(id)
            .then(() => dispatch(removeCharacter(id)))
            .catch(e => console.log(e))
    }
}