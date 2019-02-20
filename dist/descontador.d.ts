/**
 * Descuenta en un segundo desde el valor establecido hasta cero.
 */
export declare class Descontador {
    /**
     * @ignore
     */
    valorInicial: number;
    /**
     * @ignore
     */
    constructor(valor?: number);
    /**
     * Cuenta desde el numero hasta cero
     */
    start(): import("rxjs/internal/Observable").Observable<string>;
}
