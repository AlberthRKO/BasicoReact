import React from 'react';
import './pacientes.css'
import Producto from './Producto';

const Pacientes = ({estados,cambiarEstados}) => (
    <div className="pacientes">
        <h2>Tus Pacientes</h2>
        {/* recibe el js Producto y los va mostrando  */}
        {/* agregamos un ternario tipo if para que no se muestre vacio la seccion de pacientes */}
        { estados.length ===0 
            ? <p>No hay elelemntos en el carrito</p>
            :estados.map( paciente => (
                <Producto 
                   key= {paciente.id}
                   paciente={paciente}
                //    pasamos las variables de estado y la otra para desde ahi sacarlo
                   estados = {estados}
                   cambiarEstados={cambiarEstados}
                />
            ))
            
        }

    </div>
)
 
export default Pacientes;