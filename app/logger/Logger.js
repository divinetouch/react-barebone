export const logger = store => next => action => {
    let result = next(action);
    if(ENV.debug) {
        console.info('dispatching', action);
        console.log('next state', store.getState());
    }
    return result;
};