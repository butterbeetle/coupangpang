// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/characters", {
      target: "https://nikke-api.vercel.app",
      changeOrigin: true,
    })
  );
};
