import React, { Component } from 'react';

class AppHandler extends Component {
    render() {
        return (
            <div className="center">
                {this.props.children}
            </div>
        );
    }
}

export default AppHandler;
