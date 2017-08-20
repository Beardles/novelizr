import * as api from '../services/chapter'

// Action Types
export const LOADED_CHAPTERS = '[Chapter] Loaded Chapters'
export const SELECT_CHAPTER = '[Chapter] Select Chapter'
export const UPDATE_SELECTED_CHAPTER = '[Chaper] Update Selected Chapter'
export const ADD_CHAPTER = '[Chapter] Add Chapter'
export const REPLACE_CHAPTER = '[Chapter] Replace Chapter'
export const REMOVE_CHAPTER = '[Chapter] Remove Chapter'

// Action Creators
export const loadedChapters = chapters => ({ type: LOADED_CHAPTERS, payload: chapters })
export const selectChapter = chapter => ({ type: SELECT_CHAPTER, payload: chapter })
export const updateSelectedChapter = value => ({ type: UPDATE_SELECTED_CHAPTER, payload: value })
export const addChapter = chapter => ({ type: ADD_CHAPTER, payload: chapter })
export const replaceChapter = chapter => ({ type: REPLACE_CHAPTER, payload: chapter})
export const removeChapter = id => ({ type: REMOVE_CHAPTER, payload: id })

export const fetchChapters = () => {
    return dispatch => {
        api.loadChapters()
            .then(chapters => dispatch(loadedChapters(chapters)))
            .catch(e => console.log(e))
    }
}

export const createChapter = chapter => {
    return dispatch => {
        api.createChapter(chapter)
            .then(c => {
                dispatch(selectChapter(null))
                dispatch(addChapter(c))
            })
            .catch(e => console.log(e))
    }
}

export const updateChapter = chapter => {
    return dispatch => {
        api.updateChapter(chapter)
            .then(c => {
                dispatch(selectChapter(null))
                dispatch(replaceChapter(c))
            })
            .catch(e => console.log(e))
    }
}

export const deleteChapter = id => {
    return dispatch => {
        api.deleteChapter(id)
            .then(() => dispatch(removeChapter(id)))
            .catch(e => console.log(e))
    }
}
