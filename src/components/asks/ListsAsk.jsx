//Import own components
import Ask from "./Ask";
//Import context
import asksContext from "../../context/asks/asksContext";
import projectContext from "../../context/projects/projectContext";
//Import react fuction
import {useContext} from "react";
//Import transicion group
import {TransitionGroup, CSSTransition} from "react-transition-group";
export default function ListAsk() {
  const projectsContext = useContext(projectContext);
  const {project, deleteProjectFn} = projectsContext;

  const askContext = useContext(asksContext);
  const {askProject} = askContext;

  //valida si no hay ningun projecto seleccionado
  if (!project) return <h2>Selecciona un projecto</h2>;

  //realizamos usa extración de array
  const [projectCurrent] = project;

  //funcion para eliminar proyecto
  const onClickDelete = () => {
    deleteProjectFn(projectCurrent.id);
  };
  return (
    <>
      <h2>Proyecto: {projectCurrent.name}</h2>

      <ul className="listado-tareas">
        {askProject.length === 0 && <li className="tarea">No hay tareas</li>}

        <TransitionGroup>
          {askProject &&
            askProject.map((tareas, index) => (
              <CSSTransition timeout={200} classNames="tarea" key={index}>
                <Ask tareas={tareas} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => onClickDelete()}>
        Eliminar proyecto &times;
      </button>
    </>
  );
}
