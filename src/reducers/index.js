import { combineReducers } from 'redux';
import parksReducer from './parksReducer';

export default combineReducers({
    parks: parksReducer
})