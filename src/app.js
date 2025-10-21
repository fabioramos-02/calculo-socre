const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swaggerDoc");

const app = express();

app.use(express.json()); // Para tratar requisições com corpo em JSON

// Redirecionar para a documentação Swagger
app.get("/", (req, res) => {
  res.redirect("/docs");
});

// Servir o JSON do Swagger
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

// Rota para a documentação Swagger - configuração simplificada para Vercel
const swaggerOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "API de Cálculo de Score",
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerOptions));

// Definir as rotas
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/score", scoreRoutes); // Alterado para começar com /api

// Exportar o app para ser usado em index.js ou Vercel
module.exports = app;
