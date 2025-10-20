const scoreService = require("../services/scoreService");

// Função para validar o CPF
const validarCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  let resto;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
};

const getScore = (req, res) => {
  const { cpf } = req.query; // Alterado de req.body para req.query

  // Verifica se o CPF foi fornecido
  if (!cpf) {
    return res.status(400).json({ message: "CPF é obrigatório" });
  }

  // Valida o CPF
  if (!validarCPF(cpf)) {
    return res.status(400).json({ message: "CPF inválido" });
  }

  // Calcular o score
  const score = scoreService.calcularScore(cpf);

  return res.json({ cpf, score });
};
module.exports = { getScore };
