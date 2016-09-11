import React from 'react';
import ReactDOM from 'react-dom';

let Test = class extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
};

ReactDOM.render(<Test />, document.getElementById('app'));