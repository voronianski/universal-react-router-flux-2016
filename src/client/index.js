import './index.css';

import 'console-polyfill';
import 'Base64';
import 'es5-shim';
import 'es5-shim/es5-sham';

import progress from 'nprogress';
import cookies from 'cookies-js';
import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;

import RouterMatch from 'react-router/lib/match';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';

import Flux from '../shared/flux';
import routes from '../shared/routes';
import MockAPI from '../shared/utils/MockAPI';
import patchRouteHooks from '../shared/utils/patchRouteHooks';

const mountNode = document.getElementById('app');
const accessToken = cookies('access_token');
const api = new MockAPI(accessToken)
const flux = new Flux(api);
const patchedRoutes = patchRouteHooks(routes, { flux });
const passFluxToComponent = (Component, props) => {
    return <Component flux={flux} {...props} />
};

flux.deserialize(decodeURIComponent(window.escape(atob(window.__snapshot__))));

RouterMatch({history: browserHistory, routes: patchedRoutes}, async (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
        window.location.pathname = redirectLocation.pathname;
    } else if (renderProps) {
        ReactDOM.render(
            <Router
                {...renderProps}
                createElement={passFluxToComponent}
            />,
            mountNode
        );
    }
});
