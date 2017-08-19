import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import character from './reducers/character'
import chapter from './reducers/chapter'
import characterCard from './reducers/characterCard'

const reducer = combineReducers({
    character,
    chapter,
    characterCard
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
