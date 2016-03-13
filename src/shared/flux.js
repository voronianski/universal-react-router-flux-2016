import { Flummox } from 'flummox';
import AuthActions from './auth/AuthActions';
import AuthStore from './auth/AuthStore';
import DashboardActions from './dashboard/DashboardActions';
import DashboardStore from './dashboard/DashboardStore';

class Flux extends Flummox {
    constructor(api) {
        super();

        this.createActions('auth', AuthActions, api);
        this.createStore('auth', AuthStore, this);

        this.createActions('dashboard', DashboardActions, api);
        this.createStore('dashboard', DashboardStore, this);
    }
}

export default Flux;
