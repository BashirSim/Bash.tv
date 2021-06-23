import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

// Merging all the reducers with the command combineReducers

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});
