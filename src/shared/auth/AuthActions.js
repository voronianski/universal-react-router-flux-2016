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
        console.log('do?')
        await this.api.logout();
        console.log('da!')
    }
}

export default AuthActions;
