const express = require("express");
const scoreController = require("../controllers/scoreController");
const router = express.Router();

/**
 * @swagger
 * /score:
 *   get:
 *     summary: Calcular score baseado no CPF
 *     description: Este endpoint calcula o score com base no CPF fornecido.
 *     operationId: calcularScore
 *     parameters:
 *       - name: cpf
 *         in: query
 *         description: Número do CPF para calcular o score
 *         required: true
 *         schema:
 *           type: string
 *           pattern: '^[0-9]{11}$'  # Garante que o CPF tenha exatamente 11 dígitos
 *           example: "12345678901"   # Exemplo de CPF
 *     responses:
 *       200:
 *         description: Score calculado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cpf:
 *                   type: string
 *                   example: "12345678901"
 *                 score:
 *                   type: integer
 *                   example: 750
 *       400:
 *         description: Formato de CPF inválido
 */
router.get("/", scoreController.getScore);

module.exports = router;
