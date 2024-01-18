import {
  GET_USER,
  SIGN_OUT,
  ERROR_LOGIN,
  USER_LOGIN,
  ERROR_REGISTRATION,
  SUCCESS_REGISTRATION,
} from "../../types";
//import fuction react
import {useReducer} from "react";
//Import context
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    menssage: null,
    authenticated: null,
  };

  //dispacth para ejecutar acciones
  const [state, dispacth] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        user: state.user,
        menssage: state.menssage,
        authenticated: state.authenticated,
      }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
