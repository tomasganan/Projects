// import '@jest-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => {

    test('getSaludo debe de retornar "Hola Fernando"', () => {
        
        // 1.
        const nombre = 'Fernando';

        // 2.
        const saludo = getSaludo(nombre);

        // 3.
        expect(saludo).toBe('Hola ' + nombre);

    })

    // getSaludo debe de retornar Hola Carlos si no hay argumento nombre

    test('getSaludo debe de retornar Hola Carlos', () => {

        // 2.
        const saludo = getSaludo();

        // 3.
        expect(saludo).toBe('Hola Carlos');

    })
})
