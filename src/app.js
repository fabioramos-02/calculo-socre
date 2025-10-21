// src/app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swaggerDoc");

const app = express();

app.use(express.json()); // Para tratar requisições com corpo em JSON

// Redirecionar para a documentação Swagger
app.get("/", (req, res) => {
  res.redirect("/docs");
});

// Rota para a documentação Swagger com configurações para Vercel
const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API de Cálculo de Score",
  customfavIcon: "/favicon.ico",
  swaggerOptions: {
    url: "/swagger.json",
  },
};

// Servir o JSON do Swagger
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerOptions));

// Definir as rotas
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/score", scoreRoutes); // Alterado para começar com /api

// Exportar o app para a Vercel (serverless)
module.exports = app;

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});