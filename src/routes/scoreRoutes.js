const express = require("express");
const scoreController = require("../controllers/scoreController");
const router = express.Router();

/**
 * @swagger
 * /score:
 *   post:
 *     summary: Calcula o score fictício baseado no CPF
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *                 description: CPF do usuário
 *                 example: "12345678901"
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
 *                 score:
 *                   type: integer
 *                   example: 75
 *       400:
 *         description: CPF não fornecido
 */
router.post("/", scoreController.getScore);

module.exports = router;
