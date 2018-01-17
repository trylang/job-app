import axios from 'axios';

import { getRedirectPath } from '../util';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  isAuth: false,
  redirectTo: '',
  msg:'',
	user:'',
	type:''
};

//reducer
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, isAuth: true, redirectTo: getRedirectPath(action.payload) , ...action}
    case LOGIN_SUCCESS:
      return {...state, isAuth: true, redirectTo: getRedirectPath(action.payload) , ...action}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default: 
      return state
  }
}

const loginDispatch = (data) => {
  return {type: LOGIN_SUCCESS, payload: data }
}

const registerDispatch = (data) => {
  return {type: REGISTER_SUCCESS, payload: data }
}

const errorMsg = (msg) => {
  return {msg, type: ERROR_MSG};
}

// 登录方法，action
export const login = ({user, pwd}) => {
  if(!user || !pwd) {
    return errorMsg('需要输入用户名及密码');
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd})
    .then((res) => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(loginDispatch(res.data.data));
      }else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
  
}

// 注册方法, ation
export const registerAction = ({user, pwd, repeatpwd, type}) => {
  if(!user || !pwd) {
    return errorMsg('请填写用户或者密码');
  }
  else if (pwd !== repeatpwd) {
    return errorMsg('密码与确认密码不一致');
  }

  return dispatch => {
    axios.post('/user/register', {
      user, pwd, repeatpwd, type
    })
    .then((res) => {
        if(res.status === 200 && res.data.code === 0) {
          dispatch(registerDispatch({user, pwd, type}));
        }
        else {
          dispatch(errorMsg(res.data.msg));
        }
      })  
  }
}
