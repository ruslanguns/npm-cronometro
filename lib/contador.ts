import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { convertirSgAFormatoReloj } from './conversion';


export class Contador {
  valorLimite = -1;

  constructor( limite: number = 5) {
    this.valorLimite = limite;
  }

  /**
   * Cuenta de manera ascendente
   */
  start() {
    return interval(1000).pipe(
      map(
        ( sg: number ) => {
          return convertirSgAFormatoReloj( sg, 1, this.valorLimite );
        }
      )
    )
  }
}
