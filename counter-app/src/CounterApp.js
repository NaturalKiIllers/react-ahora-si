import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState(value);
    // handleAdd
    const handleAdd = () =>{
        // setCounter( counter + 1);
        setCounter( (c) => c + 1);
    }
    const resta = () =>{
        setCounter((c) => c - 1);
    }
    const reinicio = () =>{
        setCounter( value);
    }
    return (
        <>
            <h1>FullCounter, nah broma CounterApp</h1>
            <h2> {counter} </h2>
            {/* esta es una forma de trabajar el onCLick y el resto de botones que se desea trabajar con funciones */}
            {/* <button onClick={ function(){ console.log('+1')}}>+1</button> */}

            {/* segunda forma de trabajar un onClick y el reso */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ resta }>-1</button>
            <button onClick={ reinicio }>Reset</button>
        </>
    );


}
CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}
export default CounterApp;

// rafc se utiliza para hacer todo lo anterior pero genera la estructura automaticamente. 