// src/controllers/scoreController.js
const scoreService = require("../services/scoreService");
const { validarCPF } = require("../utils/cpfValidator"); // Importando a validação

const getScore = (req, res) => {
  const { cpf } = req.query;

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
