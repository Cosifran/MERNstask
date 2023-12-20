//import context
import asksContext from "../../../../context/asks/asksContext";
import projectContext from "../../../../context/projects/projectContext";
//Import react fuctions
import {useContext} from "react";
export default function Project({proyecto}) {
  const projectsContext = useContext(projectContext);
  const {currentProjectFn} = projectsContext;
  const askContext = useContext(asksContext);
  const {getAskFn} = askContext;

  const selectProject = (id) => {
    currentProjectFn(id); //fijar proyecto actual
    getAskFn(id); //filtrar tareas del projecto seleccionado
  };
  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={() => selectProject(proyecto.id)}>
        {proyecto.name}
      </button>
    </li>
  );
}
