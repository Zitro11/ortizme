let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:1235';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
    describe('Inserta un amigo: ',()=>{ 
        it('deberia insertar in amigo', (done) => { // En la funcion it() lo que deberia hacer
            chai.request(url) 
                .post('/')
                .send({ numero:"50", nombre:"isaac", apodo:"isaac"})
                .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.text).to.be.a('string');
            done();
            });
        });
    });

    describe('Obtiene amigos: ',()=>{ 
        it('Deberia obtener todos los amigos', (done) => {
            chai.request(url) 
                .get('/')
                .send()
                .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.text).to.be.a('string');
            done();
            });
        });
    });
