const modulo = require('./dist');

// console.log(modulo.convertirSgAFormatoReloj(100, 1, 1));
// console.log(modulo.convertirSgAFormatoReloj(600, 1, 1));

const cont = new modulo.Contador(20);

var d = cont.start().subscribe(
    data => {
        console.log(data);
        if (data === 'FINISH') {
            d.unsubscribe();
        }
    }
);

const desc = new modulo.Descontador(2);
var de = desc.start().subscribe(
    data => {
        console.log('D', data);
        if (data === 'FINISH') {
            de.unsubscribe();
        }
    }
);