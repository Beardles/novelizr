import { 
    LOADED_CHAPTERS, SELECT_CHAPTER, UPDATE_SELECTED_CHAPTER,
    ADD_CHAPTER, REPLACE_CHAPTER, REMOVE_CHAPTER
} from '../actions/chapter'
import Chapter from '../domain/Chapter'

const initState = {
    chapters: [],
    selectedChapter: null
}

const chapter = (state = initState, action) => {
    switch (action.type) {
        case LOADED_CHAPTERS: 
            return { ...state, chapters: action.payload.map(chapter => new Chapter(chapter)) }
        case SELECT_CHAPTER:
            return { ...state, selectedChapter: action.payload }
        case UPDATE_SELECTED_CHAPTER:
            const updated = Object.assign({}, state.selectedChapter, action.payload)
            return {...state, selectedChapter: updated }
        case ADD_CHAPTER:
            return {...state, chapters: state.chapters.concat(new Chapter(action.payload)) }
        case REPLACE_CHAPTER:
            return {
                ...state,
                chapters: state.chapters
                    .map(chapter => chapter.id === action.payload.id ? action.payload : chapter)
            }
        case REMOVE_CHAPTER:
            return {
                ...state,
                chapters: state.chapters.filter(chapter => chapter.id !== action.payload) 
            }
        default:
            return state
    }
}

export default chapter