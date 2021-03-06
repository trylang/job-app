import axios from 'axios';

const IMAGESPATH = 'IMAGESPATH';
const ERROR_MSG = 'ERROR_MSG';

// reducer
export const staticReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGESPATH: {
      return {...state, data: action.payload};
    }
    case ERROR_MSG: {
      return {...state, msg: action.msg}
    }
    default :
      return state
  }
}

const errorMsg = (msg) => {
  return {msg, type: ERROR_MSG};
}

//action
export const getImgsPath = () => {
  return dispatch => {
    axios.get('/static/imgsPath')
      .then(res => {
        if(res.status === 200) {
          dispatch({type: IMAGESPATH, payload: fomatImgsPath(res.data)})
        }        
      })
      .catch(err => {
        dispatch(errorMsg('无法获取到本地数据'));
        console.log(err);
      })

  }
  
}

const fomatImgsPath = (imgsPath) => {
  let paths = Object.keys(imgsPath);
  let pathAry = [];
  if(paths.length > 0) {
    let reg = /[^.jpg|png]+/g;
    pathAry = paths.map((item) => {
      return item.match(reg)[0];
    });
    return pathAry;
  }
}

