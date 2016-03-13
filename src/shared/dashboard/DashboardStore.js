import { Store } from 'flummox';

class DashboardStore extends Store {
    constructor(flux) {
        super();

        const dashboardActions = flux.getActions('dashboard');

        this.register(dashboardActions.requestItems, this.handleRequestItems);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            items: []
        };
    }

    handleRequestItems(items) {
        this.setState({ items });
    }

    getItems() {
        return this.state.items;
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

export default DashboardStore;
