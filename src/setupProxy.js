const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://fsppmtool-20b7e4393f1f.herokuapp.com/', // replace 6000 with your required port
            changeOrigin: true,
        })
    );
};