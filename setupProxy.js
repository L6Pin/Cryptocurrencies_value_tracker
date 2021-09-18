const express = require("express"); 
const cors = require("cors"); 
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(cors())
app.use(
  "/v1/symbols",
  createProxyMiddleware({
    target: "https://api.bitfinex.com",
    changeOrigin: true,
  })
);
app.use(
  "/v2/tickers",
  createProxyMiddleware({
    target: "https://api-pub.bitfinex.com",
    changeOrigin: true,
  })
);
app.use(
  "/v1/pubticker/",
  createProxyMiddleware({
    target: "https://api.bitfinex.com",
    changeOrigin: true,
  })
);
app.listen(3001);
