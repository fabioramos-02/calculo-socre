const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

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
  apis: [
    path.join(__dirname, "../routes/*.js"),
    path.join(__dirname, "../routes/**/*.js")
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
