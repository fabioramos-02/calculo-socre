const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Versão do OpenAPI
    info: {
      title: "API de Cálculo de Score",
      version: "1.0.0",
      description:
        "API para calcular a pontuação fictícia de score com base no CPF",
    },
    servers: [
      {
        url: "/",
        description: "Servidor principal",
      },
    ],
  },
  // Caminhos absolutos para garantir que funcione na Vercel
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};

module.exports = swaggerUi.setup(swaggerDocs, options);
