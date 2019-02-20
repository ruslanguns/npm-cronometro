const lib = require('./../dist')
const countDownClass = lib.Descontador;

const expect = require('chai').expect;
const assert = require('chai').assert;


const resultValues = [];
let beforeEachPromise;
describe('Implementación del descontador', function() {
    beforeEach(function(done) {
        const expectValues = ['00:00:06', '00:00:05', '00:00:04', '00:00:03', '00:00:02', '00:00:01', 'FINISH'];
        const count = new countDownClass(6, true);
        let position = 0;
        beforeEachPromise = new Promise(function(resolve, reject) {
            let counter = count.start(10).subscribe(data => {
                if (data !== expectValues[position]) {
                    const message = {
                        expect: expectValues[position],
                        result: data
                    };
                    reject(message);
                }
                resultValues.push({
                    result: data,
                    expect: expectValues[position],
                    suscribe: checkSuscriber(counter)
                });
                if (data === 'FINISH') {
                    counter.unsubscribe();
                    resultValues[position].suscribe = checkSuscriber(counter);
                    resolve(resultValues);
                    done();
                }
                position = position + 1;
            });
        });
    });
    xit('Comprobar que devuelve correctamente los resultados a medida que descuenta tiempo', async function() {
        return beforeEachPromise.then(data => {
                data.map(
                    value => {
                        expect(value.result).to.equal(value.expect);
                    }
                );
            })
            .catch((error) => {
                assert.fail("actual", "expected", `Se ha obtenido ${error.result} pero esperaba el valor ${error.expect}`);
            });
    });
});

function checkSuscriber(suscription) {
    if (!suscription.closed) {
        return true;
    }
    return false;
};