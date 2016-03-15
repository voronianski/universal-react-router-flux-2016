import { Actions } from 'flummox';

class AuthActions extends Actions {
    constructor(api) {
        super();

        this.api = api;
    }

    async login() {
        const authData = await this.api.login();
        return authData;
    }

    async logout() {
        await this.api.logout();
    }
}

export default AuthActions;
