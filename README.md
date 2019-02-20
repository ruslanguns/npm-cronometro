# Cronometro y Temporizador Js

Una libreria hecha en node con typescript básica que cuenta y descuenta la cantidad de segundos que se envía.

## Instalación

```
npm install proj-2c-cronometro
```

## Modo de uso

### Cronómetro contador
```typescript
const modulo = require('./dist');

const cont = new modulo.Contador(5);

var d = cont.start().subscribe(
    data => {
        console.log(data);
        if (data === 'FINISH') {
            d.unsubscribe();
        }
    }
);

/*
// Espera estos resultados
00:00:00
00:00:01
00:00:02
00:00:03
00:00:04
00:00:05
FINISH
*/
```

### Temporizador descontador
```typescript

const desc = new modulo.Descontador(5);
var de = desc.start().subscribe(
    data => {
        console.log('D', data);
        if (data === 'FINISH') {
            de.unsubscribe();
        }
    }
);

/*
// Espera estos resultados
00:00:04
00:00:03
00:00:02
00:00:01
FINISH
*/
```
