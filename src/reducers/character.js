import { 
    LOADED_CHARACTERS, SELECT_CHARACTER, UPDATE_SELECTED_CHARACTER,
    ADD_CHARACTER, REPLACE_CHARACTER, REMOVE_CHARACTER
} from '../actions/character'
import Character from '../domain/Character'

const initState = {
    characters: [],
    selectedCharacter: null
}

const character = (state = initState, action) => {
    switch (action.type) {
        case LOADED_CHARACTERS:
            return {...state, 
                characters: action.payload.map(character => new Character(character))
            }
        case SELECT_CHARACTER:
            return {...state, selectedCharacter: action.payload}
        case UPDATE_SELECTED_CHARACTER:
            const updated = Object.assign({}, state.selectedCharacter, action.payload)
            return {...state, selectedCharacter: updated }
        case ADD_CHARACTER:
            return {...state, characters: state.characters.concat(new Character(action.payload))}
        case REPLACE_CHARACTER:
            return {
                ...state,
                characters: state.characters
                    .map(character => character.id === action.payload.id ? new Character(action.payload) : character)
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