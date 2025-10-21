const swaggerJsDoc = require("swagger-jsdoc");

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
  apis: ["./src/routes/*.js", "./src/routes/**/*.js"], // Onde o Swagger vai procurar as rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
