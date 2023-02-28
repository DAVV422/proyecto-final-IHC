import React from 'react';
import '../hojas-de-estilo/Materia.css';

function Grupo({ active, activar, grupo, id, id_materia, id_grupo, horario, docente, cupo}) {
  //Cambiar de color el boton con la función activar
  return (
    <div className={`grupos ${active?"active":""}`} onClick={() => activar(active)}>    
        <div className='grupo'>
          <p className={`etiqueta-sigla3 ${(id==id_materia)?"active":""}`} onClick={() => activar(id)}> {grupo} </p>
          <p className='barra-grupo'>|</p>
        </div>
        <div className='texto2'>                     
          <p className='etiqueta-horario2'>{horario}</p>   
          <p className='etiqueta-docente2'>{docente}</p>                   
        </div>        
        <div className='area-cupo'>
          <p className='cupos'>{cupo}</p>
          <p className='texto-cupos'>CUPOS</p>
        </div> 
    </div>
  );    
}

export default Grupo;