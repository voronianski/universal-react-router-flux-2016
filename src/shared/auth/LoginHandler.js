import React, { Component } from 'react';

class LoginHandler extends Component {
    constructor(props, context) {
        super();

        this.flux = props.flux;
        this.router = context.router;
    }

    async login() {
        try {
            await this.flux.getActions('auth').login();
            this.router.push('/dashboard');
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="py4 mt1">
                <h1>You're not logged in</h1>
                <button type="button" className="btn btn-primary" onClick={::this.login}>Login</button>
            </div>
        );
    }
}

LoginHandler.contextTypes = {
    router: React.PropTypes.object
};

export default LoginHandler;
