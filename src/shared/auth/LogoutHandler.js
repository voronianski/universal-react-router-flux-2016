import React, { Component } from 'react';

class LogoutHandler extends Component {
    static onEnter({ flux }, nextState, replace) {
        if (process.browser) {
            flux.getActions('auth').logout();
            replace('/login');
        }
    }

    render() {
        return null;
    }
}

LogoutHandler.contextTypes = {
    router: React.PropTypes.object
};

export default LogoutHandler;
