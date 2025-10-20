/**
 * Valida um CPF (Cadastro de Pessoas Físicas) brasileiro.
 *
 * O CPF é um identificador único para cidadãos brasileiros e consiste em 11 dígitos.
 * Esta função verifica se o CPF fornecido é válido:
 * 1. Removendo quaisquer caracteres que não sejam dígitos.
 * 2. Garantindo que o comprimento seja exatamente 11 dígitos.
 * 3. Verificando sequências do mesmo dígito (por exemplo, 111.111.111-11).
 * 4. Calculando e validando os dois dígitos verificadores com base nos primeiros nove dígitos.
 *
 * @param {string} cpf - O número do CPF a ser validado.
 * @returns {boolean} - Retorna verdadeiro se o CPF for válido, falso caso contrário.
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
