import React from 'react';
import '../hojas-de-estilo/Materia.css';

function Grupo({ input, active, activar}) {
  return (
    <div className={`grupos ${active?"active":""}`} onClick={() => activar(active)}>
      {input}      
    </div>
  );    
}

export default Grupo;