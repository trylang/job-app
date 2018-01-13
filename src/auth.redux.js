const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// reducer.js
export function auth(state = {isAuth: false, user: '李云龙'}, action) {
    switch (action.type) {
        case LOGIN:
            console.log( state);
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state, isAuth: false};
        default:
            return state;
    }
}

// action
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
        logout: () => dispatch(logout())
    }
}