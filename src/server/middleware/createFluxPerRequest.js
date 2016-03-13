import Flux from '../../shared/flux';
import MockAPI from '../../shared/utils/MockAPI';

function createFluxPerRequest () {
    return (req, res, next) => {
        if (req.skipClient) {
            return next();
        }

        const accessToken = req.cookies.access_token;
        const api = new MockAPI(accessToken);
        const flux = new Flux(api);

        console.log(req.url, 'created flux');
        req.flux = flux;

        next();
    }
}

export default createFluxPerRequest;
