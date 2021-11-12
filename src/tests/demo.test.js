describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben ser iguales los strng', () => {
    
        // 1.Inicialización
        const msg = 'Hola Mundo';
    
        // 2.Estimulo
    
        const msg2 = "Hola Mundo";
    
        // 3.Observar el comportamiento
    
        expect(msg).toBe(msg2);
    });
})


