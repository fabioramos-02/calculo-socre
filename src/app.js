const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swaggerDoc");

const app = express();

app.use(express.json()); // Para tratar requisições com corpo em JSON

// Redirecionar para a documentação Swagger
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// Servir o JSON do Swagger
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

// Rota para a documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Definir as rotas
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/score", scoreRoutes); // Alterado para começar com /api

// Exportar o app para ser usado em index.js ou Vercel
module.exports = app;
