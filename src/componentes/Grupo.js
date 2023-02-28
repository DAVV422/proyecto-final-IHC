import React from 'react';
import '../hojas-de-estilo/Materia.css';

function Grupo({ active, activar}) {
  //Cambiar de color el boton con la función activar
  return (
    <div className={`grupos ${active?"active":""}`} onClick={() => activar(active)}>          
    </div>
  );    
}

export default Grupo;