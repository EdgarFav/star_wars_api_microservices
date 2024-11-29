const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Star Wars Characters API",
            version: "1.0.0",
            description: "Characters API",
        },
        servers: [
            {
                url: "http://104.154.230.18:8000/characters/api-docs",
                description: "Production server",
            }
        ],
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc(options);
module.exports = specs;
