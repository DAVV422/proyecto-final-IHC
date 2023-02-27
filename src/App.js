import './App.css';
import Materia from './componentes/Materia';
import Materias from './componentes/Materias';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  return (
    <div className='App'>      
      <div className='contenedor1'>
        <Materias input={input}/> 
        <Materias input={input}/> 
        <Materias input={input}/> 
        <Materias input={input}/> 
        <Materias input={input}/>                        
      </div>
      <div className='contenedor2'>
        <Materia input={input}/> 
        <Materia input={input}/> 
        <Materia input={input}/>                        
      </div>
    </div>
  );
}

export default App;