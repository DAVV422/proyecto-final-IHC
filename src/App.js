import './App.css';
import Grupos from './componentes/Grupo';
import Materias from './componentes/Materias';
import Materia from './componentes/Materia';
import React, { useState } from 'react';
import datos_materias from './data/materias';
import datos_grupos from './data/grupos_materias';

function App() {

  //variable para determinar si el componente ha sido seleccionado
  const [active, setActive] = React.useState(false); 
  const [id_materia, setId_materia] = React.useState('');  
  const [id_grupo, setId_grupo] = React.useState('');    

  //función para enviar al componente y cambiar el estado de la variable y color del componente
  const activar = (id) => {
    setId_materia(id);    
  };

  const activar_grupo = (id) => {
    setId_grupo(id);    
  };

  return (
    <div className='App'>   
      <div className='area0'>
        <h1 clasName='titulo'>Inscripción de Materias</h1>
      </div>      
      <div className='area1'>
        <div className='contenedor1'>
          <p className='etiqueta1'>Seleccione la materia para ver su grupo:</p>
          {datos_materias.map((materia) => {
            return <Materias activar={activar} id_materia={id_materia} id={materia.id} sigla={materia.sigla} nombre={materia.nombre} semestre={materia.semestre}/>
          })}
        </div>
        <div className='contenedor2'>
          <p className='etiqueta2'>Materias a inscribir:</p>
          <Materia/>                       
        </div>
        <div className='contenedor3'>                              
          <div className='grupos-materia'>
            <p className='etiqueta1'>Grupos de Materia:</p>
            {datos_materias.map((materia) => {
              if(id_materia == materia.id){
                return <p className='etiqueta2-2'> {materia.sigla} | {materia.nombre}</p>
              }          
          })}            
          </div>
          {datos_grupos.map((grupo) => {
            if(id_materia == grupo.idMateria){
              return <Grupos activar={activar_grupo} id_grupo={id_grupo} id={grupo.id} materia_id={grupo.idMateria} 
              grupo={grupo.grupo} nombre={grupo.nombre} sigla={grupo.sigla} docente={grupo.profe} cupo={grupo.cupos}/>
            }            
          })}
        </div>
      </div>   
      <div className='area2'>        
        <div className='contenedor-horario'>                                        
        </div>        
      </div>      
    </div>
  );
}

export default App;