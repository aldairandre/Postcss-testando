import Calculardora from '../../lib/jasmine_examples/my-script/Calculadora';
const Calculadora2 = Calculardora
describe('Soma dois numero',function (){
   
    let calculadora;
    
    /**Incializando a class Calculadora */
    calculadora = new Calculadora2();

    /**Testando se a funca retorna o valor 2 */
    it('passados para soma',function(){
        calculadora.soma(1,1)
        expect(calculadora.result).toBe(2)
    })
})