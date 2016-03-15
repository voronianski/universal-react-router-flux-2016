import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom/server';
import RouterMatch from 'react-router/lib/match';
import RouterContext from 'react-router/lib/RouterContext';
import patchRouteHooks from 'react-router-hooks-patch';

import routes from '../../shared/routes';

function handler (title, mainJS, mainCSS) {
    return (req, res, next) => {
        if (req.skipClient) {
            return next();
        }

        const flux = req.flux;
        const patchedRoutes = patchRouteHooks(routes, { flux });
        RouterMatch({routes: patchedRoutes, location: req.url}, async function (err, redirectLocation, renderProps) {
            if (err) {
                return next(err);
            } else if (redirectLocation) {
                return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
            } else if (renderProps) {
                try {
                    const appElement = (
                        <RouterContext
                            {...renderProps}
                            createElement={(Component, props) => {
                                return <Component flux={flux} {...props} />;
                            }}
                        />
                    );
                    const appString = ReactDOM.renderToString(appElement);
                    const snapshot = new Buffer(flux.serialize(), 'utf-8').toString('base64');

                    res.render('index', {
                        // bundles
                        mainJS,
                        mainCSS,

                        // flux data
                        snapshot,

                        // react data
                        appString,

                        // html misc
                        title
                    });
                } catch (err) {
                    next(err);
                }
            } else {
                res.status(404).send('Not found');
            }
        });
    };
}

/**
 * Example of environment differences:
 * https://github.com/voronianski/universal-react-flux-boilerplate/blob/master/src/server/middleware/layout.js#L37
 */
function development () {
    return handler(
        'Universal React Router',
        '/static/build/bundle.js',
        '/static/build/main.css',
    );
}

function production () {
    // noop
}

export default {
    development,
    production
};
