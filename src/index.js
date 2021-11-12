import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';
import './index.css';



const divRoot = document.querySelector('#root');

// Componente padre
ReactDOM.render( <CounterApp value = {10} />, divRoot);
// ReactDOM.render( <PrimeraApp saludo = "Hola Tomasito" />, divRoot);
