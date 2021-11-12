import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () =>{
        

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // toEqual: Comparar si dos objetos tienen las mismas propiedades

        expect(user).toEqual(userTest);
    })

    // getUsuarioActivo debe de retornar un objeto

    test('getUsuarioActivo debe de retornar un objeto', () =>{
        const nombre = 'Juan';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})