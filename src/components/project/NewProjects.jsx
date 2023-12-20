//Import react fuctions
import {useContext, useState} from "react";
//import context
import projectContext from "../../context/projects/projectContext";
export default function NewProjects() {
  const projectsContext = useContext(projectContext);
  const {newForm, errorFormulary, showFormularyFn, getErrorFn, setProjectFn} = projectsContext;

  const [proyecto, setProyecto] = useState({
    name: "",
  });

  const {name} = proyecto;
  const onChangeInput = (e) => {
    setProyecto({...proyecto, [e.target.name]: e.target.value});
  };

  const onChangeSubmit = (e) => {
    e.preventDefault();
    //validar el proyecto
    if (name === "") {
      getErrorFn()
      return;
    }

    //agregar al state
    setProjectFn(proyecto);

    //reiniciar formulario
    setProyecto({name: ""});
  };

  const onClickForm = () => {
    showFormularyFn();
  };
  return (
    <>
      <button
        className="btn btn-block btn-primario"
        onClick={() => {
          onClickForm();
        }}>
        Nuevo proyecto
      </button>

      {newForm && (
        <form className="formulario-nuevo-proyecto" onSubmit={onChangeSubmit}>
          <input
            type="text"
            placeholder="Nombre proyecto"
            className="input-text"
            name="name"
            value={name}
            onChange={onChangeInput}
          />

          <input
            type="submit"
            value="Agregar proyecto"
            className="btn btn-primario btn-block"
            onSubmit={(e) => {
              onChangeSubmit(e);
            }}
          />
        </form>
      )}
      {errorFormulary && <p className="mensaje error">El nombre del proyecto no puede estar vacio</p> }
    </>
  );
}
