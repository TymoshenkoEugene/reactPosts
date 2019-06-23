import REDUCERS_VALUES from '../constants/reducers-values';

const initialState = {
    posts: [{
        id: 0,
        title: 'Бойцовский клуб',
        text: 'Супер пост'
    }]
}

export const posts =  (state = initialState, action) => {
    switch(action.type){
        case REDUCERS_VALUES.ADD_POST:
            return {
                books: [
                    ...state.books,
                    action.payload
                ]
            }
        default:
            return state;

    }
}