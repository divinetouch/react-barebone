import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers/Reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from './logger/Logger';

const store = applyMiddleware(logger, thunk)(createStore)(reducers);

let Test = class extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <h1>Hello</h1>
                </div>
            </Provider>
        );
    }
};

ReactDOM.render(<Test />, document.getElementById('app'));