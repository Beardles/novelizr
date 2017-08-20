import { 
    LOADED_CHARACTERS, SELECT_CHARACTER, UPDATE_SELECTED_CHARACTER,
    ADD_CHARACTER, REPLACE_CHARACTER, REMOVE_CHARACTER
} from '../actions/character'

const initState = {
    characters: [],
    selectedCharacter: null
}

const character = (state = initState, action) => {
    switch (action.payload) {
        case LOADED_CHARACTERS:
            return {...state, characters: action.payload}
        case SELECT_CHARACTER:
            return {...state, selectedCharacter: action.payload}
        case UPDATE_SELECTED_CHARACTER:
            const updated = Object.assign({}, state.selectedCharacter, action.payload)
            return {...state, selectedCharacter: updated }
        case ADD_CHARACTER:
            return {...state, characters: state.characters.concat(action.paylod)}
        case REPLACE_CHARACTER:
            return {
                ...state,
                characters: state.characters
                    .map(character => character.id === action.payload.id ? action.payload : character)
            }
        case REMOVE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(character => character.id !== action.payload)
            }
        default:
            return state
    }
}

export default character