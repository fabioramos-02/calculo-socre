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

// Configuração do Swagger UI com CDN customizado
const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API de Cálculo de Score",
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
  customJs: [
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js'
  ],
  swaggerOptions: {
    url: '/swagger.json',
  }
};

// Rota para a documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerOptions));

// Definir as rotas
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/score", scoreRoutes); // Alterado para começar com /api

// Exportar o app para ser usado em index.js ou Vercel
module.exports = app;
