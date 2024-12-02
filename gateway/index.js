const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    // target: "http://localhost:8001",
    changeOrigin: true,
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    // target: "http://localhost:8002",
    changeOrigin: true,
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    // target: "http://localhost:8003",
    changeOrigin: true,
  })
);

app.use(
  "/:model",
  createProxyMiddleware({
    target: "http://database:8004",
    // target: "http://localhost:8004",
    changeOrigin: true,
  })
);

app.listen(8000, () => {
  console.log("Gateway on port 8000");
});
