import React from 'react';
import '../hojas-de-estilo/Materia.css';

function Grupo({ activar, grabar, grupo, sigla, nombre, id, id_materia, id_grupo, horario, docente, cupo}) {
  //Cambiar de color el boton con la función activar
  return (
    <div className='contenedor-grupo'>
      <div className={`grupos ${id==id_grupo?"active":""}`} onClick={() => activar(id)}>    
          <div className='grupo'>
            <p className={`etiqueta-sigla3 ${(id==id_grupo)?"active":""}`} onClick={() => activar(id)}> {grupo} </p>
            <p className={`barra-grupo ${(id==id_grupo)?"active":""}`} onClick={() => activar(id)}>|</p>
          </div>
          <div className='texto2'>                     
            <p className={`etiqueta-horario2 ${(id==id_grupo)?"active":""}`} onClick={() => activar(id)}>{horario}</p>   
            <p className={`etiqueta-docente2 ${(id==id_grupo)?"active":""}`} onClick={() => activar(id)}>{docente}</p>                   
          </div>        
          <div className='area-cupo'>
            <p className={`cupos ${(id==id_grupo)?"active":""}`} onClick={() => activar(id)}>{cupo}</p>
            <p className={`texto-cupos ${(id==id_grupo)?"active":""}`} onClick={() => activar(id)}>CUPOS</p>
          </div> 
      </div>
      {id==id_grupo &&
        <div className='area-seleccionar' onClick={()=>grabar(id_materia, nombre, sigla, horario, docente)}>
          <p className='texto-seleccionar'>SELECCIONAR</p>
        </div>
      }
    </div>
  );    
}

export default Grupo;