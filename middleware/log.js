const logMiddleware = (request, response, next) => {
    console.log(`{$request.method} - ${request.url}`);
    next();
};

module.exports = logMiddleware;