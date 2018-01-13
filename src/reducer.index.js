import { combineReducers } from 'redux';
import { auth } from './auth.redux';
import  { showGuns } from './index.redux';

export default combineReducers({
    auth,
    showGuns
})