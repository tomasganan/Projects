import React from 'react';
// import { Fragment } from 'react';
import PropTypes from 'prop-types';

// Componentes: Pequeña pieza de codigo encapsulada re-utilizable que puede tener estado o no
// Los componentes se escriben con mayuscula al principio y entre medio.

// Funcional component

const PrimeraApp = ({ saludo, subtitulo }) =>{
    

    // const saludo = 'Hola Mundo';

    // const saludoObj = {
    //     nom: 'Tomas',
    //     edad: 25
    // }

    // Utilizando JSX
    return (
        <>
            {/* // Imprimir objetos */}
            {/* <pre> {JSON.stringify(saludoObj, null, 3)} </pre> */}

            <h1> {saludo} </h1>
            <p> {subtitulo} </p>
        </>
        
    );
}

// Propiedades para el componente.

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired
}

// Propiedad por defecto

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;