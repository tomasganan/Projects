import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroés', () => {

    test('Debe retornar un héroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar un undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
    })

    // TAREA

    test('Debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner );

        expect(heroes).toEqual(heroeData);
    })
    
    test('Debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // const heroeData = heroes.filter(h => h.owner === owner );

        expect(heroes.length).toBe(2);
    })



    

})