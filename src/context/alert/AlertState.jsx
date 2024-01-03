//import fuction react
import {useReducer} from "react";
//import context
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
//import types
import {GET_ALERT, DELETE_ALERT} from "../../types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  //dispacth para ejecutar acciones
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //funciones
  const getAlertFn = (msg, categoria) => {
    dispatch({
      type: GET_ALERT,
      payload: {
        msg,
        categoria,
      },
    });

    setTimeout(() => {
      dispatch({
        type: DELETE_ALERT,
      });
    }, 5000);
  };

  return (
    <alertContext.Provider value={{alert: state.alert, getAlertFn}}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
