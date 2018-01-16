
import React from 'react';
<<<<<<< HEAD
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
=======
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Login, Detail, Topics } from './route.doc';
import reducer from './reducer.index';

// 如果想用redux-dev-tools时，同步可以，但是异步就需要使用compose了。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
console.log(store);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr /> */}
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/about" component={Detail} />
                    <Route path="/topics" component={Topics} />
                    <Redirect to="/about"/>
                </Switch>               
            </div>

>>>>>>> 934e3ce2795d9b56ca6d71fcfe43c2f65a5b2364
        </Router>
     </Provider>,
    document.getElementById('root')
)