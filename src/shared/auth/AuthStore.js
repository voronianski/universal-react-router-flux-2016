import { Store } from 'flummox';

class AuthStore extends Store {
    constructor(flux) {
        super();

        const authActions = flux.getActions('auth');

        this.register(authActions.login, this.handleLogin);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            accessToken: null,
            user: null
        };
    }

    handleLogin({ user, accessToken }) {
        this.setState({ user, accessToken });
    }

    static serialize(state) {
        return JSON.stringify(state);
    }

    static deserialize(state) {
        try {
            return JSON.parse(state);
        } catch (err) {
            // do nothing
        }
    }
}

export default AuthStore;
