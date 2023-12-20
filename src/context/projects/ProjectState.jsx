//Import fuction react
import {useReducer} from "react";
//Import uuid
import {v4 as uuidv4} from "uuid";
//Import types
import {
  FORMULARY_PROJECT,
  GET_PROJECT,
  SET_PROJECT,
  DELETE_PROJECT,
  CURRENT_PROJECT,
  VALIDATION_FORMULARY,
} from "../../types";
//Import Context
import ProjectReducer from "./projectReducer";
import ProjectContext from "./projectContext";

const ProjectState = (props) => {
  const projects = [
    {
      id: 1,
      name: "Tienda virtual",
    },
    {
      id: 2,
      name: "Intranet",
    },
    {
      id: 3,
      name: "Diseño de sitio web",
    },
  ];
  const initialState = {
    projects: [],
    project: null,
    newForm: false,
    errorFormulary: false,
  };
  //dispacth para ejecutar acciones
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  //serie de funciones para el CRUD
  const showFormularyFn = () => {
    dispatch({
      type: FORMULARY_PROJECT,
    });
  };
  //obtener proyectos
  const getProjectFn = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects,
    });
  };

  //guardar proyectos
  const setProjectFn = (project) => {
    project.id = uuidv4();

    //insertar projecto en state
    dispatch({
      type: SET_PROJECT,
      payload: project,
    });
  };

  //valida si hay errores en el formulario
  const getErrorFn = () => {
    dispatch({
      type: VALIDATION_FORMULARY,
    });
  };

  //obtener el proyecto actual
  const currentProjectFn = (project) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: project,
    });
  };

  //para eliminar un proyecto
  const deleteProjectFn = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        newForm: state.newForm,
        errorFormulary: state.errorFormulary,
        showFormularyFn,
        getProjectFn,
        getErrorFn,
        setProjectFn,
        currentProjectFn,
        deleteProjectFn,
      }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
