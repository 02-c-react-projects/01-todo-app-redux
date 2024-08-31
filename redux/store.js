import {createStore} from 'redux'
import todoReducer from './reducers/todoReducer'
import { combineReducers } from 'redux'

const result=combineReducers({
    todoReducer: todoReducer,
    noteReducer: noteReducer
})
export const store = createStore(result)
