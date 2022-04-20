describe('Soma dois numero',function (){
    const Calculadora = require('../../lib/jasmine_examples/my-script/Calculadora')
    let calculadora;
    
    /**Incializando a class Calculadora */
    calculadora = new Calculadora();

    /**Testando se a funca retorna o valor 2 */
    it('passados para soma',function(){
        calculadora.soma(1,1)
        expect(calculadora.result).toBe(2)
    })
})