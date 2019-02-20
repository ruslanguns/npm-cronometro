"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
class Descontador {
    constructor(valor = 5) {
        this.valorInicial = -1;
        this.valorInicial = valor;
    }
    start() {
        return interval_1.interval(1000).pipe(map_1.map((sg) => {
            return conversion_1.convertirSgAFormatoReloj(this.valorInicial - sg, 2, this.valorInicial);
        }));
    }
}
exports.Descontador = Descontador;
