import {
    LOADED_CHARACTER_CARDS, SELECT_CHARACTER_CARD, ADD_CHARACTER_CARD,
    UPDATE_SELECTED_CHARACTER_CARD, REPLACE_CHARACTER_CARD, REMOVE_CHARACTER_CARD
} from '../actions/characterCard'
import CharacterCard from '../domain/CharacterCard'

const initState = {
    characterCards: [],
    selectedCharacterCard: null
}

const characterCard = (state = initState, action) => {
    switch (action.type) {
        case LOADED_CHARACTER_CARDS:
            return {...state, characterCards: action.payload}
        case SELECT_CHARACTER_CARD:
            return {...state, selectedCharacterCard: action.payload}
        case UPDATE_SELECTED_CHARACTER_CARD:
            const updated = Object.assign({}, state.selectedCharacterCard, action.payload)
            return {...state, selectedCharacterCard: updated}
        case ADD_CHARACTER_CARD:
            return {...state, characterCards: state.characterCards.concat(new CharacterCard(action.payload))}
        case REPLACE_CHARACTER_CARD:
            return {...state,
                characterCards: state.characterCards
                    .map(c => c.id === action.payload.id ? new CharacterCard(action.payload) : c)
            }
        case REMOVE_CHARACTER_CARD:
            return {...state,
                characterCards: state.characterCards
                    .filter(c => c.id !== action.payload)
            }
        default:
            return state
    }
}

export default characterCard
