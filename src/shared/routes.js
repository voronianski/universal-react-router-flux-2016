import React from 'react'; // eslint-disable-line no-unused-vars
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import AppHandler from './common/AppHandler';
import LayoutHandler from './common/LayoutHandler';
import NotFoundHandler from './common/NotFoundHandler';
import LoginHandler from './auth/LoginHandler';
import LogoutHandler from './auth/LogoutHandler';
import DashboardHandler from './dashboard/DashboardHandler';
import AboutHandler from './about/AboutHandler';

const routes = (
    <Route path="/" component={AppHandler}>
        <IndexRedirect to="/dashboard" />

        <Route path="login(/)" component={LoginHandler} />
        <Route path="logout(/)" component={LogoutHandler} />

        <Route path="/" component={LayoutHandler}>
            <Route path="dashboard(/)" component={DashboardHandler} />
            <Route path="about(/)" component={AboutHandler} />
            <Route path="*" component={NotFoundHandler}/>
        </Route>
    </Route>
);

export default routes;
