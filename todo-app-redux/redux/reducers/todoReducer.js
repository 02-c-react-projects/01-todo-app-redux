import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions'

const initialState = {
    todos: [
        // {text: 'Learn React', isCompleted: false}
    ],
}
function todoReducer(state = initialState, action) {
    switch (action.type) {
        
        case 'ADD_TODO':
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id: state.todos.length,
                        text: action.text,
                        isCompleted: false
                    }
                ]
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo
                })
            }

        default:
            return state
    }
}