import axios from 'axios';

const LIST_SUCCRSS = 'LIST_SUCCRSS';
const initState = {
  userlist: []
}

// reducer
export const userlistReducer = (state=initState, action) => {
  switch(action.type) {
    case LIST_SUCCRSS:
      return {...state, userlist: action.payload};
    default: 
      return state;
  }
}

const listDispatch = (data) => {
  return {type: LIST_SUCCRSS, payload: data};
}

// action
export const getUserList = (type) => {
  return dispatch => {
    axios.get('/user/list?type='+ type)
    .then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(listDispatch(res.data.data));
      }     
    })
  }
  
}