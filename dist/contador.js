"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
class Contador {
    constructor(limite = 5) {
        this.valorLimite = -1;
        this.valorLimite = limite;
    }
    start() {
        return interval_1.interval(1000).pipe(map_1.map((sg) => {
            return conversion_1.convertirSgAFormatoReloj(sg, 1, this.valorLimite);
        }));
    }
}
exports.Contador = Contador;
