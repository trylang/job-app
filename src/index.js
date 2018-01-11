import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { showGuns, addGun, removeGun } from './index.redux';

let store = createStore(showGuns);

// 打印初始值
console.log(store.getState());

let unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})

store.dispatch(addGun(1));
store.dispatch(removeGun(2));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
