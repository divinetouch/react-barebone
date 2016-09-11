import {combineReducers} from 'redux';
import ApplicationStateReducer from './ApplicationStateReducer';
import STATE_NAME from '../constants/StateName';

export default combineReducers({
    [STATE_NAME.APPLICATION_STATE]: ApplicationStateReducer
});