

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



// action 函数
export function addGun(num) {
    return {type: ADD_GUN, number: num};
}

export function removeGun(num) {
    return {type: REMOVE_GUN, number: num};
}


