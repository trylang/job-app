
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// // 如果想用redux-dev-tools时，同步可以，但是异步就需要使用compose了。
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//     showGuns,
//     composeEnhancers(
//         applyMiddleware(thunk)
//     )   
// );

// action 类型
export const ADD_GUN = 'add gun';
export const REMOVE_GUN = 'remove gun';

// reducer 函数

export function showGuns(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + action.number;
        case REMOVE_GUN:
            return state - action.number;
        default:
            return 10;
    }
}

// action 函数(同步)
export function addGun(num) {
    console.log('add' + num);
    return {type: ADD_GUN, number: num};
}

export function removeGun(num) {
    console.log('remove' + num);
    return {type: REMOVE_GUN, number: num};
}

// action 函数（异步）
export function addGunAsync(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun(num));
        }, 1000);
    };
}

// 定义props的state
export const mapStateToProps = state => {
    return {
        number: state
    }
}

// 定义props的action
export const mapDispatchToProps = (dispatch) => {
    return {
        addGun: () => dispatch(addGun(1)),
        removeGun: () => dispatch(removeGun(1)),
        addGunAsync: () => dispatch(addGunAsync(2))
    }
}



