/**
 * Validates a Brazilian CPF (Cadastro de Pessoas Físicas) number.
 *
 * The CPF is a unique identifier for Brazilian citizens and consists of 11 digits.
 * This function checks if the provided CPF is valid by:
 * 1. Removing any non-digit characters.
 * 2. Ensuring the length is exactly 11 digits.
 * 3. Checking for sequences of the same digit (e.g., 111.111.111-11).
 * 4. Calculating and validating the two check digits based on the first nine digits.
 *
 * @param {string} cpf - The CPF number to be validated.
 * @returns {boolean} - Returns true if the CPF is valid, false otherwise.
 */
// src/utils/cpfValidator.js

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

module.exports = { validarCPF };
