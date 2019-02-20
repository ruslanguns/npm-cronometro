import { Tiempo } from './constants';

/**
 * Funcion para convertir los segundos en HH:MM:SS
 * @param sg Segundos del momento
 * @param tipo tipo 1: Contador / 2: Descontador
 * @param limite Valor limite hasta el momento que funcionara
 */
export function convertirSgAFormatoReloj( sg: number, tipo: number, limite: number ) {
  // Definir cuando termina
  if (tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
    return 'FINISH';
  }
  // Conseguir el tiempo formateado para devolverlo

  //Horas
  const horas = Math.floor(( sg % Tiempo.SG_DIA) / Tiempo.SG_HORA);
  // Minutos
  const minutos = Math.floor((sg % Tiempo.SG_HORA) / Tiempo.SG_MIN);
  // Segundos
  const sgs = Math.floor((sg % Tiempo.SG_MIN));
  return adaptarAlReloj(horas, minutos, sgs);
}
/**
 * @ignore
 */
function adaptarAlReloj( horas: number, minutos: number, sg: number ) {
  const h = darNumeroFormatoCorrecto(horas);
  const m = darNumeroFormatoCorrecto(minutos);
  const s = darNumeroFormatoCorrecto(sg);

  return `${ h }: ${ m }:${ s}`;
}

function darNumeroFormatoCorrecto( n: number ) {

  return( n < 10 ) ? '0'.concat(String(n)): String(n);
}
