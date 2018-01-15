
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducers from './reducer';
import './config';

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';

// 如果想用redux-dev-tools时，同步可以，但是异步就需要使用compose了。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )   
);

ReactDom.render(
    <Provider store={store}>
        <Router>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register}/>
            </div>
        </Router>
     </Provider>,
    document.getElementById('root')
)