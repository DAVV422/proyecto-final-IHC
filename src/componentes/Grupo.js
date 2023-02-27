import React from 'react';
import '../hojas-de-estilo/Materia.css';

function Grupo({ input, active, activar}) {
  //Cambiar de color el boton con la función activar
  return (
    <div className={`grupos ${active?"active":""}`} onClick={() => activar(active)}>
      {input}      
    </div>
  );    
}

export default Grupo;