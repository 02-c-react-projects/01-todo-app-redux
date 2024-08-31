const initialState = {
    notes: [
        {text: 'Learn React', createdOn: new Date()},
        {text: 'Learn Redux', createdOn: new Date()}
    ]
}

export function noteReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    }
                ]
            }
        
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter((note, index) => index !== action.index)
            }
        default:
            return state
    }
}

