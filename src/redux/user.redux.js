import axios from 'axios';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  isAuth: false,
  msg:'',
	user:'',
	type:''
};

//reducer
const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, ...action}
    case ERROR_MSG:
      return {...state, msg: action.msg}
    default: 
      return state
  }
}

// 注册方法, ation
export const register = ({user, psd, repeatpsd, type}) => {
  if(!user || !psd) {
    return '请填写用户或者密码';
  }
  else if (psd !== repeatpsd) {
    return '密码与确认密码不一致';
  }

  return dispatch => {
    axios.post('/register')
      .then((req, res) => {
        if(res.state === 200 && res.code === 0) {
          dispatch({type: REGISTER_SUCCESS,msg: null, data:res.data});
        }
        else {
          dispatch({type: REGISTER_SUCCESS, msg: res.data.msg});
        }
      })  
  }
}