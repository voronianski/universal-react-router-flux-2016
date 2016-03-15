import http from 'http';
import path from 'path';
import swig from 'swig';
import open from 'opener';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import * as middleware from './middleware';

const port = process.env.PORT || 7070;
const app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './views'));

app.use(logger('dev'));
app.use(cookieParser());
app.use(compression());
app.use('/static', express.static(path.join(__dirname, '../../public')));

app.use(middleware.skipClientForUrls(['/static', '/favicon']));
app.use(middleware.createFluxPerRequest());
app.use(middleware.renderHTML.development());

http.createServer(app).listen(port, () => {
    console.log('Web app is listening on localhost:%s', port);
    open(`http://localhost:${port}`);
});
