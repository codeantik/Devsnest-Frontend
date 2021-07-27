import inputChangeReducer from './inputChangeReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    inputChange: inputChangeReducer,
})

export default rootReducer