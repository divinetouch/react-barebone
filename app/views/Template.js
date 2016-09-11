import React, {Component} from 'react';

let Template = class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'home'
        };
    }

    componentDidMount() {

    }

    _selected(item) {
        this.setState({selected: item});
    }

    _logout() {
        alert('Are you sure?');
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui secondary pointing menu" ref="menu">
                    <a className={this.state.selected === 'home'? 'active item': 'item'} onClick={this._selected.bind(this, 'home')}>
                        Home
                    </a>
                    <a className={this.state.selected === 'messages'? 'active item': 'item'} onClick={this._selected.bind(this, 'messages')}>
                        Messages
                    </a>
                    <a className={this.state.selected === 'friends'? 'active item': 'item'} onClick={this._selected.bind(this, 'friends')}>
                        Friends
                    </a>
                    <div className="right menu">
                        <a className="ui item" onClick={this._logout.bind(this)}>
                            Logout
                        </a>
                    </div>
                </div>
                <div className="ui segment">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Template;