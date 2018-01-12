import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { store, mapStateToProps, mapDispatchToProps } from './index.redux';

// @connect(
//     state => ({number: state}),
//     {addGun, removeGun, addGunAsync}
// );

const ShowGuns = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
        <ShowGuns/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
