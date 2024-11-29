const express = require("express");
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");
const specs = require("./swagger/swagger");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/characters/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

server.use("/characters", require("./routes"));

server.use("*", (req, res) => {
  res.status(400).send("Not Found");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
