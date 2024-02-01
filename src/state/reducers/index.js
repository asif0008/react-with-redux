import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer
})

export default reducers;


// Combine reducers is to combine all reducers
// it is an function that take an object