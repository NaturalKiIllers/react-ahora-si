//Los componentes siempre se debe llevar la primer letra con mayuscula, y si la palabra es compuesta la siguiente tambien debe tener la primera letra mayuscula.
//imr importa react altiro
import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ({ saludo}) => {


    // const saludo = {
    //     nombre: 'Matias',
    //     apellido : 'Melo'
    // }
    // const saludo = 'Hola Mundo'
    return ( 
        <>
            {/* //Esto se utiliza para poder imprimir una variable de js directo en html. se debe poner el tipo de linea que se desea seguido de las llaves con el nombre de const */}
             <h1> {saludo}</h1>
            {/* <pre> { JSON.stringify(saludo, null, 3)}</pre> */}
            {/* Esto se utiliza para poder llamar al objeto y darle un formato lo mas parecido al objeto en si, el null se utiliza para el replace, como el 3 para darle el espacio */}
            {/* ctrl + / genera */}
            <p>Mi primer parrafo de la aplicacion</p>
        </>
    );
    //hay distintas formas de trabajar con un return de mas de una columna, debido a que esta palabra o retorno como tal solo puede entregar una linea como resultado,
    //para eso se utiliza fractment, pero este no se utiliza tanto y hay que hacer importaciones innecesarias.
    //Es por ello que se utiliza solamente despues de un return las <></> vacias indicando que es una importacion implicita y que babel reconoce como fragment altiro. 
       
}
PrimeraApp.propTypes ={
    saludo : PropTypes.string.isRequired
    // esto queda asi cuando no es obligatorio, si se quiere obligar a que se haga se debe poner .isRequired
}
export default PrimeraApp;