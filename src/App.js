import "./App.css";
import Horario from "./componentes/Horario";
import Grupos from "./componentes/Grupo";
import Materias from "./componentes/Materias";
import Materia from "./componentes/Materia";
import React, { useState } from "react";
import datos_materias from "./data/materias";
import datos_grupos from "./data/grupos_materias";

function App() {
  const [input, setInput] = useState("");

  //variable para determinar si el componente ha sido seleccionado
  const [id_materia, setId_materia] = React.useState("");
  const [id_grupo, setId_grupo] = React.useState("");

  const [materias, setMaterias] = useState([]);

  //Grabar las materias del grupo seleccionado
  const grabar = (id_materia, nombre, sigla, docente, horario) => {
    const materia = {
      id: id_materia,
      nombre_materia: nombre,
      horario_materia: horario,
      sigla_materia: sigla,
      docente_materia: docente,
    };
    const materiasActualizadas = [materia, ...materias];
    console.log(materiasActualizadas);
    setMaterias(materiasActualizadas);
  };

  const eliminarMateria = (id_materia) => {
    const materiasActualizadas = materias.filter(
      (materia) => materia.id !== id_materia
    );
    console.log(id_materia);
    console.log(materiasActualizadas);
    setMaterias(materiasActualizadas);
  };

  //función para enviar al componente y cambiar el estado de la variable y color del componente
  const activar = (id) => {
    setId_materia(id);
  };

  const activar_grupo = (id) => {
    setId_grupo(id);
  };

  return (
    <main className="bg-white">
      <div className="w-full h-screen p-2">
        <div className="grid h-h5 grid-cols-1 items-center">
          <p className="text-2xl font-extrabold text-primary mx-4">
            {/* etiqueta 1 */}
            Inscripcion de materias
          </p>
        </div>
        <div className="contenedor2">
          <p className="etiqueta2">Materias a inscribir:</p>
          {materias.map((materia) => {
            return (
              <Materia
                eliminar={eliminarMateria}
                id={materia.id}
                nombre={materia.nombre_materia}
                sigla={materia.sigla_materia}
                docente={materia.docente_materia}
                horario={materia.horario_materia}
              />
            );
          })}
        </div>
        <div className="contenedor3">
          <div className="grupos-materia">
            <p className="etiqueta1">Grupos de Materia:</p>
            {datos_materias.map((materia) => {
              if (id_materia == materia.id) {
                return (
                  <p className="etiqueta2-2">
                    {" "}
                    {materia.sigla} | {materia.nombre}
                  </p>
                );
              }
            })}
          </div>
          {datos_grupos.map((grupo) => {
            if (id_materia == grupo.idMateria) {
              return (
                <Grupos
                  activar={activar_grupo}
                  grabar={grabar}
                  id_grupo={id_grupo}
                  id={grupo.id}
                  id_materia={grupo.idMateria}
                  grupo={grupo.grupo}
                  nombre={grupo.nombre}
                  sigla={grupo.sigla}
                  horario={grupo.horaString}
                  docente={grupo.profe}
                  cupo={grupo.cupos}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="area2">
        <div className="contenedor-horario">
          <p className="etiqueta2">Vista Horario</p>
          <div className="vista-horario">
            <div className="encabezado-horario">
              <div>Horario</div>
              <div>Lunes</div>
              <div>Martes</div>
              <div>Miercoles</div>
              <div>Jueves</div>
              <div>Viernes</div>
              <div>Sabado</div>
            </div>
            <Horario />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
