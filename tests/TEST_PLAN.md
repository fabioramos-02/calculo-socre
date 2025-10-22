# Plano de Testes — Serviço de Cálculo de Score

Contexto
--------
Projeto: calculo-socre
Componente alvo: `src/services/scoreService.js` (função `calcularScore`)
Objetivo: Validar o comportamento do microserviço de cálculo de score de forma simples, objetiva e seguindo boas práticas de Validação e Verificação de Software.

Escopo
------
- Testes unitários da função `calcularScore`.
- Cobertura: comportamento esperado (tipo, intervalo) e robustez frente a entradas inválidas.

Ferramentas sugeridas
---------------------
- Test runner: Jest
- Para TypeScript nos testes: ts-jest (opcional)

Configuração mínima recomendada
------------------------------
Instalar dependências de teste (exemplo):

```bash
npm install --save-dev jest ts-jest @types/jest
```

Adicionar script ao `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Casos de Teste (simples e objetivos)
-----------------------------------
1. Happy path — CPF válido
   - Entrada: string de CPF (ex.: "12345678901")
   - Verificações:
     - Retorna um valor do tipo `number`.
     - É um número inteiro.
     - Está no intervalo esperado [100, 1000] (conforme implementação atual).
   - Critério de aceitação: todas as verificações passam.

2. Robustez — entradas inválidas
   - Entrada: `null`, `undefined`, string não numérica (ex.: "abc").
   - Verificações:
     - A função não deve lançar exceções (não crash).
     - Se retornar um número, ele também deve obedecer ao intervalo [100, 1000].
   - Critério de aceitação: não há exceções não tratadas.

3. Comportamento determinístico (observação)
   - Observação: implementação atual retorna valor aleatório. Testes não devem assumir determinismo.
   - Verificações: múltiplas chamadas retornam valores válidos (no intervalo) — não assertar igualdade.

Critérios de Aceitação Globais
-----------------------------
- 100% dos testes implementados no plano devem passar.
- Nenhum teste deve depender da ordem de execução.
- Testes devem ser rápidos (unitários) e isolados.

Boas Práticas Aplicadas
-----------------------
- Testes pequenos, claros e focados (arrange-act-assert).
- Cobrir happy path e edge cases mínimos.
- Não dependência de ambiente (usar dados estáticos e mocks se necessário).

Como rodar os testes
-------------------
1. Instale as dependências de desenvolvimento sugeridas (Jest + ts-jest).
2. Execute:

```bash
npm test
```

Observações
-----------
- A implementação atual de `calcularScore` gera um valor aleatório. Se for necessário tornar o comportamento determinístico (para testes mais precisos), considere injetar uma função geradora de números (ex.: passar um gerador ou permitir semente) ou alterar a implementação para retornar valores derivados do CPF.


Referências
----------
- Princípios de Validação e Verificação de Software
- Jest documentation: https://jestjs.io/