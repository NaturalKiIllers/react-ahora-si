import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';

import'./index.css';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');


//si se desea probar que poner numero queda de la forma siguiente.
// ReactDOM.render( <PrimeraApp saludo={123}/> ,divRoot )

ReactDOM.render(<CounterApp value= {0}/>, divRoot);