import React, { Component } from 'react';
import FluxComponent from 'flummox/component';

class DashboardHandlerInner extends Component {
    render() {
        const { items } = this.props;

        return (
            <div>
                <h1>List of things:</h1>
                {items.length ? (
                    <div>
                        {items.map(item => {
                            return (
                                <div key={item._id}>
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>No things :(</div>
                )}
            </div>
        );
    }
}

class DashboardHandler extends Component {
    static async onEnter({ flux }, nextState, replace, callback) {
        const dashboardActions = flux.getActions('dashboard');
        if (!flux.getStore('dashboard').getItems().length) {
            try {
                await dashboardActions.requestItems();
            } catch (err) {
                replace('/login');
            }
        }
        callback();
    }

    render() {
        return (
            <FluxComponent flux={this.props.flux} connectToStores={{
                dashboard: store => ({
                    items: store.getItems()
                })
            }}>
                <DashboardHandlerInner {...this.props} />
            </FluxComponent>
        );
    }
}

DashboardHandler.contextTypes = {
    router: React.PropTypes.object
};

export default DashboardHandler;
