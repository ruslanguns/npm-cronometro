"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function convertirSgAFormatoReloj(sg, tipo, limite) {
    // Definir cuando termina
    if (tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
        return 'FINISH';
    }
    // Conseguir el tiempo formateado para devolverlo
    //Horas
    const horas = Math.floor((sg % constants_1.Tiempo.SG_DIA) / constants_1.Tiempo.SG_HORA);
    // Minutos
    const minutos = Math.floor((sg % constants_1.Tiempo.SG_HORA) / constants_1.Tiempo.SG_MIN);
    // Segundos
    const sgs = Math.floor((sg % constants_1.Tiempo.SG_MIN));
    return adaptarAlReloj(horas, minutos, sgs);
}
exports.convertirSgAFormatoReloj = convertirSgAFormatoReloj;
function adaptarAlReloj(horas, minutos, sg) {
    const h = darNumeroFormatoCorrecto(horas);
    const m = darNumeroFormatoCorrecto(minutos);
    const s = darNumeroFormatoCorrecto(sg);
    return `${h}: ${m}:${s}`;
}
function darNumeroFormatoCorrecto(n) {
    return (n < 10) ? '0'.concat(String(n)) : String(n);
}
