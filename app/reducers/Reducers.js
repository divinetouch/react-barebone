import {combineReducers} from 'redux';
import ApplicationStateReducer from './ApplicationStateReducer';
import STATE_NAME from '../constants/StateName';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    [STATE_NAME.APPLICATION_STATE]: ApplicationStateReducer,
    routing: routerReducer
});