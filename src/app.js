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

// Rota para a documentação Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Definir as rotas
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/score", scoreRoutes); // Alterado para começar com /api

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
