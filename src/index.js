import React from 'react';
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

        </Router>
     </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
