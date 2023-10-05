import {soma} from './soma'
describe('soma', ()=>{
    it(`A soma de 1 + 1 deve ser 2. `, () => {
        const resultado = soma (1,1);

        expect(resultado).toBe(2);
      });

      it(`2 + 2 não é igual a 5.`, () => {
        const resultado = soma (2,2);

        expect(resultado).not.toBe(5);
      });
});