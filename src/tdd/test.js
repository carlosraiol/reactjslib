import soma from '../soma';

describe('Testando a função soma', () => {
    it('A soma deve dar 3', () => {
        expect(soma(1, 2)).toBe(3);
    });
})