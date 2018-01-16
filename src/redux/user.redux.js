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
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, isAuth: true, ...action}
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
    axios.post('/user/register')
      .then((req, res) => {
        console.log(req);
        if(res.state === 200 && res.code === 0) {
          dispatch({type: REGISTER_SUCCESS,msg: null, data:res.data});
        }
        else {
          dispatch({type: REGISTER_SUCCESS, msg: res.data.msg});
        }
      })  
  }
}
