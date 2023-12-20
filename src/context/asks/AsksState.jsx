//Import fuction react
import {useReducer} from "react";
//Import uuid
import {v4 as uuidv4} from "uuid";
//Import context
import asksReducer from "./asksReducer";
import asksContext from "./asksContext";
//import types
import {
  GET_ASK,
  ADD_ASK,
  VALIDATION_ASK,
  UPDATE_ASK,
  DELETE_ASK,
  STATE_ASK,
  CURRENT_ASK,
} from "../../types";

const AsksState = (props) => {
  const initialState = {
    asks: [
      {id: 1, name: "Elegir plataforma", state: true, idProject: 1},
      {id: 2, name: "Elegir proyecto", state: true, idProject: 2},
      {id: 3, name: "Elegir hosting", state: false, idProject: 3},
      {id: 4, name: "Elegir colores", state: true, idProject: 4},
      {id: 5, name: "Elegir plataforma", state: true, idProject: 2},
      {id: 6, name: "Elegir proyecto", state: true, idProject: 2},
      {id: 7, name: "Elegir hosting", state: false, idProject: 3},
      {id: 8, name: "Elegir colores", state: true, idProject: 1},
    ],
    askProject: null,
    currentAsk: null,
    errorAsk: false,
  };

  //dispacth para ejecutar acciones
  const [state, dispatch] = useReducer(asksReducer, initialState);

  //Funciones
  const getAskFn = (projectID) => {
    dispatch({
      type: GET_ASK,
      payload: projectID,
    });
  };

  //añadir tarea a proyecto seleccionado
  const addAskFn = (ask) => {
    ask.id = uuidv4();
    dispatch({
      type: ADD_ASK,
      payload: ask,
    });
  };

  //valida errores en el form
  const validateAskFn = () => {
    dispatch({
      type: VALIDATION_ASK,
    });
  };

  //eliminar tarea
  const deleteAskFn = (id) => {
    dispatch({
      type: DELETE_ASK,
      payload: id,
    });
  };

  //cambiar estado de la tarea
  const changeStateFn = (ask) => {
    dispatch({
      type: STATE_ASK,
      payload: ask,
    });
  };

  //sellecionar tarea actual
  const currentAskFn = (ask) => {
    dispatch({
      type: CURRENT_ASK,
      payload: ask,
    });
  };

  //actualiza la tarea actual
  const updateAskFn = (tarea) => {
    dispatch({
      type: UPDATE_ASK,
      payload: tarea,
    });
  };

  return (
    <asksContext.Provider
      value={{
        asks: state.asks,
        askProject: state.askProject,
        currentAsk: state.currentAsk,
        errorAsk: state.errorAsk,
        getAskFn,
        addAskFn,
        validateAskFn,
        deleteAskFn,
        changeStateFn,
        currentAskFn,
        updateAskFn,
      }}>
      {props.children}
    </asksContext.Provider>
  );
};

export default AsksState;
