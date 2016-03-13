import { Actions } from 'flummox';

class DashboardActions extends Actions {
    constructor(api) {
        super();

        this.api = api;
    }

    async requestItems() {
        const items =  await this.api.getItems();
        return items;
    }
}

export default DashboardActions;
