import "./App.css";
import Grupos from "./componentes/Grupo";
import Materias from "./componentes/Materias";
import Materia from "./componentes/Materia";
import React, { useState } from "react";
import datos_materias from "./data/materias";
import datos_grupos from "./data/grupos_materias";
import Sidebar from "./componentes/Sidebar";

function App() {
  const [input, setInput] = useState("");

  //variable para determinar si el componente ha sido seleccionado
  const [active, setActive] = React.useState(false);
  const [id_materia, setId_materia] = React.useState("");
  const [id_grupo, setId_grupo] = React.useState("");

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

        <div className="flex h-h95 grid-cols-2 border items-center">
          <div className="flex-col border h-full w-w55">
            <div className="flex h-3/5 grid-cols-2 border p-2 justify-around">
              <div className="flex-col w-1/2 bg-bg-primary my-0 mx-4 p-2 rounded-2xl shadow-sm items-center justify-center">
                <p className="text-xs font-normal text-black ml-2 mb-2">
                  {/* etiqueta 1 */}
                  Seleccione la materia para ver sus grupos:
                </p>
                <div className="contenedor1">
                  {datos_materias.map((materia) => {
                    return (
                      <Materias
                        activar={activar}
                        id_materia={id_materia}
                        id={materia.id}
                        sigla={materia.sigla}
                        nombre={materia.nombre}
                        semestre={materia.semestre}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex-col w-1/2 bg-bg-primary my-0 mx-4 p-2 rounded-2xl shadow-sm items-center justify-center ">
                <p className="text-xs font-bold text-black ml-2 mb-2 ">
                  {/* etiqueta 2 */}
                  Materias a inscribir:
                </p>
                <div className="contenedor1">
                  <Materia />
                </div>
              </div>
            </div>

            <div className="flex-col border h-1/3  bg-bg-primary mt-5 mx-6 p-2 rounded-2xl shadow-sm items-start justify-center">
            <p className="text-xs font-normal text-black ml-2 mb-2">
                  {/* etiqueta 1 */}
                  Grupos de la materia:
                </p> 
              <div className="contenedor3">
                <div className="grupos-materia">
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
                        id_grupo={id_grupo}
                        id={grupo.id}
                        materia_id={grupo.idMateria}
                        grupo={grupo.grupo}
                        nombre={grupo.nombre}
                        sigla={grupo.sigla}
                        docente={grupo.profe}
                        cupo={grupo.cupos}
                      />
                    );
                  }
                })}
              </div>
            </div>


          </div>

          <div className="flex border h-full w-w45 p-2 items-start justify-center">
            <div className="contenedor-horario"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
