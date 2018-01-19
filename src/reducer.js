// 合并所有reducer，并且返回
import { combineReducers } from 'redux';
import { userReducer } from './redux/user.redux';
import { staticReducer } from './redux/static.redux';
import { userlistReducer } from './redux/userlist.redux';

export default combineReducers({userReducer, staticReducer, userlistReducer});