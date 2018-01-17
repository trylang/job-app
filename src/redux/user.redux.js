import axios from 'axios';

import { getRedirectPath } from '../util';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
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
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default: 
      return state
  }
}

const errorMsg = (msg) => {
  return {msg, type: ERROR_MSG};
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
          dispatch({type: REGISTER_SUCCESS, payload: {user, pwd, type}});
        }
        else {
          dispatch({type: ERROR_MSG, msg: res.data.msg});
        }
      })  
  }
}
