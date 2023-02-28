import React from 'react';
import '../hojas-de-estilo/Materia.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Materia({eliminar, id, horario, nombre, sigla, docente}) {
  return (    
      <div className='materia_seleccionada'>
        <div className='texto'>
        <p className='etiqueta2-sigla'> {sigla} | </p>        
        <p className='etiqueta2-materia'>{nombre}</p>            
        <p className='etiqueta-horario'>{horario}</p>   
        <p className='etiqueta-docente'>{docente}</p>                   
        </div>        
        <div className='icono' onClick={() => eliminar(id)}>
          <AiFillCloseCircle className='tarea-icono' />
        </div> 
      </div>             
  ); 
}

export default Materia;