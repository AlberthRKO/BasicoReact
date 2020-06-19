import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Pacientes from './components/Pacientes';

function App() {

  // Cramos listado de productos
  // usando el state el primer parametro es lo que necesitas osea productos y el otro es una funcion que ayuda a reescribir el estate
  // en useState van los valores iniciales
  const [pacientes, guardarPacientes] = useState([
    {id : 1, nombre: 'Alberth Paredes', estado: 'Normal'},
    {id : 2, nombre: 'Orlando Paredes', estado: 'Activo'},
    {id : 3, nombre: 'Luis Paredes', estado: 'Normal'},
    {id : 4, nombre: 'Alvaro Paredes', estado: 'Recuperado'},
    {id : 5, nombre: 'Thomas Paredes', estado: 'Activo'}
  ])

  // El estate no se debe modificar directamente, usualmente se usa la funcion que extraes de useEstate o si es un classcomponente con dispatchEvent.setEstate 

  // estate para una vista de estados
  const [estados, cambiarEstados] = useState([

  ])

  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      <Header
        titulo = 'Pacientes Covid'
      />

      <h2>Lista de Pacientes</h2>
      {pacientes.map(paciente =>(
        <Producto 
          key={paciente.id}
          paciente={paciente}
          pacientes = {pacientes}
          estados={estados}
          cambiarEstados={cambiarEstados}
        />
      ))}

   {/* mostramos el carrito pasandole al js */}
       <Pacientes
        estados={estados}
        cambiarEstados={cambiarEstados}
       /> 

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
