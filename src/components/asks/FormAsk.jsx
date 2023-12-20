//Import context
import asksContext from "../../context/asks/asksContext";
import projectContext from "../../context/projects/projectContext";
//Import react fuction
import {useContext, useState, useEffect} from "react";
export default function FormAsk() {
  const [ask, setAsk] = useState({
    name: "",
  });

  const {name} = ask;
  const projectsContext = useContext(projectContext);
  const {project} = projectsContext;

  const askContext = useContext(asksContext);
  const {currentAsk, errorAsk, addAskFn, validateAskFn, getAskFn, updateAskFn} =
    askContext;
  useEffect(() => {
    if (currentAsk !== null) {
      setAsk(currentAsk);
    } else {
      setAsk({
        name: "",
      });
    }
  }, [currentAsk]);

  //valida si no hay ningun projecto seleccionado
  if (!project) return null;

  //realizamos usa extración de array
  const [projectCurrent] = project;

  const onChange = (e) => {
    setAsk({
      ...ask,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar
    if (name.trim() === "") {
      validateAskFn();
      return;
    }

    //validar si están editando
    if (currentAsk !== null) {
      updateAskFn(ask);
    } else {
      //pasar la validacion
      ask.idProject = projectCurrent.id;
      ask.state = false;
      //agregar nueva tarea
      addAskFn(ask);
    }

    getAskFn(projectCurrent.id);
    //reiniciar el form
    setAsk({
      name: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            value={name}
            onChange={onChange}
            placeholder="Nombre tarea"
            name="name"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-submit btn-primario btn-block"
            value={currentAsk ? "Editar tarea" : "Agregar tarea"}
            onClick={onSubmit}
          />
        </div>
      </form>
      {errorAsk && (
        <p className="mensaje error">El nombre de la tarea es obligtorio</p>
      )}
    </div>
  );
}
