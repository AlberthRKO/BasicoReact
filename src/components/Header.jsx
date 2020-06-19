// Pasos para todos los componentes
import React from 'react';



// props sirve para leer datos desde el applicationCache.js
function Header({titulo}){
    // usamos destructuring para mostrar directo lo q queremos
    
    // console.log(props)
    
    return(
        <h1>{titulo}</h1>
    )
}

export default Header;
