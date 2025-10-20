// src/swagger/swaggerDoc.js
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Definindo a versão do OpenAPI
    info: {
      title: "API de Cálculo de Score",
      version: "1.0.0",
      description:
        "API para calcular a pontuação fictícia de score com base no CPF",
    },
  },
  apis: ["./src/routes/*.js"], // Rota onde o Swagger vai procurar os comentários
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
