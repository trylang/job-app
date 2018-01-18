
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reducers from './reducer';
import './config';

import AuthRoute from './component/authroute/authroute';
import Dashbord from './component/dashbord/dashbord';
import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';

// 如果想用redux-dev-tools时，同步可以，但是异步就需要使用compose了。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )   
);

ReactDom.render(
    <Provider store={store}>
        <Router>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/geniusinfo' component={GeniusInfo}/>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register}/>
                    <Route component={Dashbord}/>
                </Switch>
            </div>
        </Router>
     </Provider>,
    document.getElementById('root')
)