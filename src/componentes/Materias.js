import React from 'react';
import '../hojas-de-estilo/Materia.css';

const Materias = ({ activar, id_materia, id, sigla, nombre, semestre }) => (
  <div className={`materias ${(id==id_materia)?"active":""}`} onClick={() => activar(id)}>
    <p className={`etiqueta-sigla ${(id==id_materia)?"active":""}`} onClick={() => activar(id)}> {sigla} | </p>
    <p className={`etiqueta-semestre ${(id==id_materia)?"active":""}`} onClick={() => activar(id)}>{semestre}</p>
    <p className={`etiqueta-materia ${(id==id_materia)?"active":""}`} onClick={() => activar(id)}> {nombre}</p>
  </div>
); 

export default Materias;