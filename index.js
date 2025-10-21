// index.js (Arquivo de entrada para Vercel e local)
const app = require('./src/app');

// Exportar para Vercel (serverless)
module.exports = app;

// Iniciar servidor localmente se executado diretamente
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📚 Documentação Swagger: http://localhost:${PORT}/api-docs`);
  });
}