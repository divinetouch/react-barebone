import React, {Component} from 'react';

let NotFound = class extends Component {
    render() {
        return(
            <div>
                <h2 className="ui center aligned header" style={{color: 'red', fontWeight: 'bold'}}>
                    Page Not Found
                </h2>
            </div>
        );
    }
};

export default NotFound;