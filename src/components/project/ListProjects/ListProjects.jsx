//Import own components
import Project from "./Project/Project";
//Import react fuctions
import {useContext, useEffect} from "react";
//Import context
import projectContext from "../../../context/projects/projectContext";
//Import transicion group
import {TransitionGroup, CSSTransition} from "react-transition-group";
export default function ListProjects() {
  //extraigo proyectos de state inicial
  const projectsContext = useContext(projectContext);
  const {projects, getProjectFn} = projectsContext;
  useEffect(() => {
    getProjectFn();
  }, []);

  return (
    <ul className="listado-proyecto">
      {projects.length === 0 && (
        <p>No hay proyectos, puedes empezar creando uno</p>
      )}
      <TransitionGroup>
        {projects.map((proyecto) => (
          <CSSTransition timeout={200} classNames="proyecto" key={proyecto.id}>
            <Project proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
