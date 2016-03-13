import cookies from 'cookies-js';

const ACCESS_TOKEN = 'access_token';

class MockAPI {
    constructor(accessToken) {
        if (accessToken) {
            this.setAccessToken(accessToken);
        }
    }

    _request(data, opts = {}) {
        return new Promise((resolve, reject) => {
            if (opts.secure && !this.accessToken) {
                return reject('Unauthorized');
            }

            setTimeout(() => {
                if (opts.saveToken) {
                    this.setAccessToken(data.accessToken);
                    cookies.set(ACCESS_TOKEN, data.accessToken);
                }
                resolve(data);
            }, opts.delay || 0);
        });
    }

    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }

    login() {
        return this._request({
            accessToken: 'secret',
            user: {
                firstName: 'John',
                lastName: 'Doe'
            }
        }, {
            delay: 200,
            saveToken: true
        });
    }

    logout() {
        cookies.expire(ACCESS_TOKEN);
    }

    getItems() {
        return this._request([
            {_id: 1, title: 'Japanese book'},
            {_id: 2, title: 'Nationale Visa'},
            {_id: 3, title: 'Payoneer account'}
        ], {
            delay: 300,
            secure: true
        });
    }
}

export default MockAPI;
