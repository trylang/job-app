import axios from 'axios';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  isAuth: false,
  msg:'',
	user:'',
	type:''
};

//action


//reducer

// 注册方法
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
          dispatch(res.data);
        }
        else {
          console.log(res);
        }
      })  
  }
}