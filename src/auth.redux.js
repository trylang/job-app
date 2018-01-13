import axios from 'axios';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initState = {
    isAuth: false,
    user: '李云龙',
    age: 32
};

// reducer.js
export function auth(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state, isAuth: false};
        case USER_DATA:
            console.log({...state, ...action.payload});
            return {...state, ...action.payload};
        default:
            return state;
    }
}

// action
export const getUserData = () => {
    return dispatch => {
        axios.get('/data')
        .then(function(response) {
            if(response.status === 200) {
                dispatch(userData(response.data))
            }           
        })
        .catch(function(err) {
            console.log(err);
        })
    }
   
}

export const userData = (user) => {
    return {type: USER_DATA, payload: user}
}

export const login = () => {
    return {type: LOGIN};
}

export const logout = () => {
    return {type: LOGOUT};
}

export const mapStateToProps = state => {
    return {
        title: state
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
        getUserData: () => dispatch(getUserData())
    }
}