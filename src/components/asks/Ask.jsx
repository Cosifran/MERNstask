//import react fuctions
import {useContext} from "react";
//import context
import asksContext from "../../context/asks/asksContext";
import projectContext from "../../context/projects/projectContext";
export default function Ask({tareas}) {
  const projectsContext = useContext(projectContext);
  const {project} = projectsContext;

  const [projectCurrent] = project;

  const askContext = useContext(asksContext);
  const {deleteAskFn, getAskFn, changeStateFn, currentAskFn} = askContext;

  const onChangeAsk = (tarea) => {
    if (tarea.state) {
      tarea.state = false;
    } else {
      tarea.state = true;
    }
    changeStateFn(tarea);
  };

  const onDelete = (id) => {
    deleteAskFn(id);
    getAskFn(projectCurrent.id);
  };

  const selectCurrentAsk = (tarea) => {
    currentAskFn(tarea);
  };
  return (
    <li className="tarea sombra">
      <p>{tareas.name}</p>
      <div className="estado">
        {tareas.state && (
          <button
            type="button"
            className="completo"
            onClick={() => {
              onChangeAsk(tareas);
            }}>
            Completo
          </button>
        )}
        {!tareas.state && (
          <button
            type="button"
            className="incompleto"
            onClick={() => {
              onChangeAsk(tareas);
            }}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => {
            selectCurrentAsk(tareas);
          }}>
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => onDelete(tareas.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}
