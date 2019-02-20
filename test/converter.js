const lib = require('./../dist');

const secondsToTime = lib.convertirSgAFormatoReloj;

const expect = require('chai').expect;

describe('Comprobar que la conversión de segundos a formato HH:MM:SS es correcto', () => {
    it('Convertir "x" segundos in format reloj digital y mostrar bien la salida', () => {
        const secondsValues = [345, 23, 34, 61, 60, 90, 900, 1200, 3600, 4200, 7230, 56];
        const expectValues = [
            '00:05:45',
            '00:00:23',
            '00:00:34',
            '00:01:01',
            '00:01:00',
            '00:01:30',
            '00:15:00',
            '00:20:00',
            '01:00:00',
            '01:10:00',
            '02:00:30',
            '00:00:56'
        ]
        let position = 0;
        secondsValues.map(
            secondsValue => {
                expect(secondsToTime(secondsValue, 1, secondsValue + 10)).to.equal(expectValues[position]);
                position++;
            }
        );

    });

    it('Comprobar que la salida tiene elementos HH MM SS que se separan con ":"', () => {
        const secondsValue = 345;
        const timeFormat = secondsToTime(secondsValue, 1, secondsValue + 10);
        const timeFormatElements = timeFormat.split(':');
        expect(timeFormatElements.length).to.equal(3);
        timeFormatElements.map(
            value => expect(value).to.length(2)
        );
    });
});