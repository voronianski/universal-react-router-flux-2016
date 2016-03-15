function skipClientForUrls (skipUrls = []) {
    const _skipClient = req => {
        return skipUrls.some(url => {
            return req.url.substr(0, url.length) === url;
        });
    };

    return (req, res, next) => {
        if (_skipClient(req)) {
            req.skipClient = true;
        }
        next();
    };
}

export default skipClientForUrls;
