let funciones = require('C:/wamp64/www/ortizme/Parcial 3/Aserciones/src/funciones.js');

let chai = require ('chai');
let shoul = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe('Pruebas de funcion potencia SHOULD', function(){
    it('Deberia dar un 8',function(){
        let resultado = funciones.potencia(2,3);

        resultado.should.be.a('number');
        resultado.should.equal(8);

    })
});


describe('Pruebas de funcion potencia EXPECT', function(){
    it('Deberia dar un 8',function(){
        let resultado = funciones.potencia(2,3);

        expect(resultado).to.be.a('number');
        expect(resultado).to.equal(8);

    })
});

describe('Pruebas de funcion potencia ASSERT', function(){
    it('Deberia dar un 8',function(){
        let resultado = funciones.potencia(2,3);

        assert.typeOf(resultado,'number');
        assert.equal(resultado, 8);

    })
});