import React from 'react'; // eslint-disable-line no-unused-vars
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import AppHandler from './AppHandler';
import LoginHandler from './auth/LoginHandler';
import LogoutHandler from './auth/LogoutHandler';
import DashboardHandler from './dashboard/DashboardHandler';

const routes = (
    <Route path="/" component={AppHandler}>
        <Route path="login(/)" component={LoginHandler} />
        <Route path="logout(/)" component={LogoutHandler} />
        <Route path="dashboard(/)" component={DashboardHandler} />
        <IndexRoute component={DashboardHandler} />
    </Route>
);

export default routes
