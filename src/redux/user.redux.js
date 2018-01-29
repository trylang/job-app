import axios from 'axios';

import { getRedirectPath } from '../util';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  // isAuth: false,
  redirectTo: '',
  msg:'',
	user:'',
	type:''
};

//reducer
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, redirectTo: getRedirectPath(action.payload) , ...action.payload}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case LOGOUT_SUCCESS:
      return {...initState, redirectTo: '/login'}
    case ERROR_MSG:
      return {...state, msg: action.msg}
    default: 
      return state
  }
}

const errorMsg = (msg) => {
  return {msg, type: ERROR_MSG};
}

const authDispatch = (data) => {
  return {type: AUTH_SUCCESS, payload: data}
}

// 存储信息， action
export const loadData = (data) => {
  return {type: LOAD_DATA, payload: data}
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
        dispatch(authDispatch(res.data.data));
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
          dispatch(authDispatch({user, pwd, type}));
        }
        else {
          dispatch(errorMsg(res.data.msg));
        }
      })  
  }
}

// 更新方法， action
export const update = (data) => {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        dispatch(authDispatch(res.data.data));
      })
  }
}

// 退出方法， action
export const logoutSubmit = () => {
  return {type: LOGOUT_SUCCESS};
}

