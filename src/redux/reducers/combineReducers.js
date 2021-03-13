import { combineReducers } from 'redux';
import countReducer from './countReducer';
import postReducer from './postReducer';

export default combineReducers({
    countReducer,
    postReducer,
});