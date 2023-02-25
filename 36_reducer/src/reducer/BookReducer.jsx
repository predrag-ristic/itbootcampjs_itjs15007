import { v4 as uuidv4 } from 'uuid'

// action: {
//     type: "Switch value",
//     payload: {
//         title: '',
//         author: '',
//         id: ''
//     }
// }

export const BookReducer = (state, action) => {
    console.log('Book Reducer', state, action);
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                id: uuidv4(),
                title: action.payload.title,
                author: action.payload.author
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.payload.id)
        default:
            return state;
    }
}