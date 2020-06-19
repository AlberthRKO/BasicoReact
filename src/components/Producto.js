import React from 'react';

const Paciente = ({ paciente, estados, cambiarEstados, pacientes }) => {
    const { id, nombre, estado } = paciente

    const cambioEstado = id => {
        //filtramos al paciente por su id y lo mostramos cuando le de click
        const paciente = pacientes.filter(paciente => paciente.id === id)[0];
        // manera de agregar datos a un state
        // para evitar que se sobreescriba crearemos una copia de lo anterior
        cambiarEstados([...estados, paciente])
    }

    const eliminarPaciente = id => {
        // cuando le de click a uno filtraremos los ids que sean diferentes a esos para conservarlo
        const pacientes = estados.filter(paciente => paciente.id !== id) //filter crea una copia del arreglo
        // Colocar pacientes a la lista
        cambiarEstados(pacientes)
    }

    return (
        <div>
            <h3>Nombre : {nombre}</h3>
            <p>Estado : {estado}</p>

            {/* hacemos un ternario para saber si tiene pacientes muestre un boton y si no lo tiene muestre el otro para la lista de tus pacientes */}
            {pacientes
                ?
                (
                    <button
                        type="button"
                        onClick={() => cambioEstado(id)}
                    >Cambiar Estadito</button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={() => eliminarPaciente(id)}
                    >Eliminar</button>
                )

            }
        </div>
    );
}

export default Paciente;