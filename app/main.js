//vendor
import 'jquery';
import './vendor/semantic-ui/semantic.min.css';
import './vendor/semantic-ui/semantic.min';
import './styles/app.scss';
//end vendor

import React, {Component} from 'react';
import {render} from 'react-dom';
import reducers from './reducers/Reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from './logger/Logger';
import {Template, Home, NotFound} from './views';

//router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const store = applyMiddleware(logger, thunk)(createStore)(reducers);
const history = syncHistoryWithStore(browserHistory, store);

let App = class extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Template}>
                        <IndexRoute component={Home} />
                        <Route path="/*" component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        );
    }
};

render(<App />, document.getElementById('app'));