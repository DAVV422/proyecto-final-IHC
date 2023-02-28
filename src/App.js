import "./App.css";
import Grupo from "./componentes/Grupo";
import Materia from "./componentes/Materia";
import Materias from "./componentes/Materias";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  //variable para determinar si el componente ha sido seleccionado
  const [active, setActive] = React.useState(false);

  //función para enviar al componente y cambiar el estado de la variable y color del componente
  const activar = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      <div className="area0">
        <h1 clasName="titulo">Inscripción de Materias</h1>
      </div>
      <div className="area1">
        <div className="contenedor1">
          <p className="etiqueta1">Seleccione la materia para ver su grupo:</p>
          <Materias input={input} />
        </div>
        <div className="contenedor2">
          <p className="etiqueta2">Materias a inscribir:</p>
          <Materia input={input} />
        </div>
        <div className="contenedor3">
          <div className="grupos-materia">
            <p className="etiqueta1">Grupos de Materia:</p>
            <p className="etiqueta2-2"> LIN100 | Inglés Técnico I</p>
          </div>
          <Grupo input={input} active={active} activar={activar} />
        </div>
      </div>
      <div className="area2">
        <div className="contenedor-horario"></div>
      </div>
    </div>
  );
}

export default App;
