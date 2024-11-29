const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Star Wars Films API",
            version: "1.0.0",
            description: "Films API",
        },
        servers: [
            {
                url: "http://104.154.230.18:8000/films/api-docs",
                description: "Production server",
            }
        ],
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc(options);
module.exports = specs;
