const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //   target: 'wss://api-pub.bitfinex.com/ws/2',
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
