const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swaggerDoc");

const app = express();

app.use(express.json()); // Para tratar requisições com corpo em JSON
app.get("/", (req, res) => {
    res.redirect("/docs");
});

// Rota para a documentação Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Definir as rotas (vamos adicionar depois)
const scoreRoutes = require("./routes/scoreRoutes");
app.use("/score", scoreRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
