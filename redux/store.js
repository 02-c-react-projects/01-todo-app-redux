import {createStore} from 'redux'
import todoReducer from './reducers/todoReducer'
import { combineReducers } from 'redux'
import { noteReducer } from './reducers/noteReducer'

const result=combineReducers({
    todoReducer: todoReducer,
    noteReducer: noteReducer
})
export const store = createStore(result)
