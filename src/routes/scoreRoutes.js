const express = require("express");
const scoreController = require("../controllers/scoreController");
const router = express.Router();

/**
 * @swagger
* /score:
 *   post:
 *     summary: Calculate score based on CPF
 *     description: This endpoint calculates the score based on the provided CPF.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *                 pattern: "^[0-9]{11}$"  # Garante que o CPF tenha exatamente 11 dígitos
 *                 description: CPF number to calculate the score
 *                 example: "12345678901"  # Exemplo de CPF
 *     responses:
 *       200:
 *         description: Score calculated successfully
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
 *                   example: 75
 *       400:
 *         description: Invalid CPF format
 */
router.post("/", scoreController.getScore);

module.exports = router;
