// Para rodar os testes, use: npm test ou npx jest
const { calcularScore } = require('../src/services/scoreService');

describe('scoreService - calcularScore', () => {
  it('deve retornar um número inteiro entre 100 e 1000 para CPF válido', () => {
    const result = calcularScore('12345678901');
    expect(typeof result).toBe('number');
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(100);
    expect(result).toBeLessThanOrEqual(1000);
  });

  it('não deve lançar exceção para entradas inválidas e deve retornar valor no intervalo', () => {
    expect(() => calcularScore(null)).not.toThrow();
    expect(() => calcularScore(undefined)).not.toThrow();
    expect(() => calcularScore('abc')).not.toThrow();

    const r1 = calcularScore(null);
    const r2 = calcularScore(undefined);
    const r3 = calcularScore('abc');

    [r1, r2, r3].forEach((r) => {
      expect(typeof r).toBe('number');
      expect(Number.isInteger(r)).toBe(true);
      expect(r).toBeGreaterThanOrEqual(100);
      expect(r).toBeLessThanOrEqual(1000);
    });
  });

  it('múltiplas chamadas devem retornar valores dentro do intervalo (não determinístico)', () => {
    const values = new Array(10).fill(0).map(() => calcularScore('12345678901'));
    values.forEach((v) => {
      expect(typeof v).toBe('number');
      expect(Number.isInteger(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(100);
      expect(v).toBeLessThanOrEqual(1000);
    });
  });
});
