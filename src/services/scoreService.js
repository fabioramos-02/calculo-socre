const calcularScore = (cpf) => {
  // Lógica fictícia para cálculo de score baseado no CPF
  // Aqui você pode fazer uma validação básica ou gerar um score fictício
const score = Math.floor(Math.random() * 901) + 100; // Score aleatório entre 100 e 1000
  return score;
};

module.exports = { calcularScore };
