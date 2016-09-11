let initialState = {
    error: {}
};

export default (state=initialState, action) => {
    switch(action.type) {
        case 'ERROR':
            return Object.assign({}, {...state, error: Object.assign({}, {...action.error})});
        default:
            return state;
    }
};