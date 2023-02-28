import React from 'react';
import '../hojas-de-estilo/Materia.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Materia() {
  return (    
      <div className='materia_seleccionada'>
        <div className='texto'>
        <p className='etiqueta2-sigla'> MAT101 | </p>        
        <p className='etiqueta2-materia'>Cálculo I</p>            
        <p className='etiqueta-horario'>LUN-MIE-VIE 08:30-10:00</p>   
        <p className='etiqueta-docente'>Justiniano Vaca Juan Tomás</p>                   
        </div>        
        <div className='icono'>
          <AiFillCloseCircle className='tarea-icono' />
        </div> 
      </div>             
  ); 
}

export default Materia;