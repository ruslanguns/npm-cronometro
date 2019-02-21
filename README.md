# Cronometro y Temporizador Js

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f1edbe02f76a4409880bb582e37dfe3c)](https://app.codacy.com/app/ruslanguns/anartz-npm-2c-cronometro?utm_source=github.com&utm_medium=referral&utm_content=ruslanguns/anartz-npm-2c-cronometro&utm_campaign=Badge_Grade_Settings)
[![Build Status](https://travis-ci.org/ruslanguns/anartz-npm-2c-cronometro.svg?branch=master)](https://travis-ci.org/ruslanguns/anartz-npm-2c-cronometro)
[![npm version](https://badge.fury.io/js/proj-2c-cronometro.svg)](https://badge.fury.io/js/proj-2c-cronometro)
[![Documentation](https://raw.githubusercontent.com/ruslanguns/anartz-npm-2c-cronometro/master/documentation/images/coverage-badge-documentation.svg?sanitize=true)](https://github.com/ruslanguns/anartz-npm-2c-cronometro/tree/master/documentation)
[![Coverage Status](https://coveralls.io/repos/github/ruslanguns/anartz-npm-2c-cronometro/badge.svg?branch=master)](https://coveralls.io/github/ruslanguns/anartz-npm-2c-cronometro?branch=master)

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
