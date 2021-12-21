const reducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_PROJECT':
            return state = [...state, action.payload];
        default:
            return state;
    }
};

export default reducer;