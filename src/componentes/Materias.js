import React from 'react';
import '../hojas-de-estilo/Materia.css';

const Materias = ({ activeMat, activar, sigla, nombre, semestre }) => (
  <div className={`materias ${activeMat?"active":""}`} onClick={() => activar(activeMat)}>
    <p className='etiqueta-sigla'> {sigla} | </p>
    <p className='etiqueta-semestre'>{semestre}</p>
    <p className='etiqueta-materia'> {nombre}</p>
  </div>
); 

export default Materias;