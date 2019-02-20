import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { convertirSgAFormatoReloj } from './conversion';

/**
 * Descuenta en un segundo desde el valor establecido hasta cero.
 */
export class Descontador {
  /**
   * @ignore
   */
  valorInicial = -1;

  /**
   * @ignore
   */
  constructor( valor: number = 5) {
    this.valorInicial = valor;
  }
/**
 * Cuenta desde el numero hasta cero
 */
  start() {
    return interval(1000).pipe(
      map(
        ( sg: number ) => {
          return convertirSgAFormatoReloj( this.valorInicial - sg, 2, this.valorInicial );
        }
      )
    )
  }
}
