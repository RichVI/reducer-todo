export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

export const todoReducer = (state, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return  [
                {item: action.payload,
                 completed: false,
                 id: new Date()},
                 ...state,
                ];
        case 'TOGGLE_COMPLETE':
            return state.map(items => (items.id === action.payload.id) ? {...items,completed: !items.completed} :items);
        case 'CLEAR_COMPLETE':
            return state.filter(items => (items.completed === false));
        default: 
            return state;
    }
}
