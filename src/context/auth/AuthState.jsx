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
//import clientAxios
import tokenAuth from "../../config/token";
import clientAxios from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    menssage: null,
    authenticated: null,
  };

  //dispacth para ejecutar acciones
  const [state, dispacth] = useReducer(authReducer, initialState);

  const registerUserFn = async (data) => {
    try {
      const reply = await clientAxios.post("/api/usuarios", data);
      localStorage.setItem("token", reply.data.token);
      dispacth({
        type: SUCCESS_REGISTRATION,
        payload: reply.data,
      });

      //obtener al usuario
      await userAutenticateFn();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispacth({
        type: ERROR_REGISTRATION,
        payload: alert,
      });
    }
  };

  const loginUserFn = async (data) => {
    try {
      const reply = await clientAxios.post("/api/auth", data);
      console.log(reply)
      dispacth({
        type: USER_LOGIN,
        payload: reply.data,
      });
    } catch (error) {
      console.log(error.response);
      const alert = {
        msg: error.response.data.error[0].msg,
        category: "alerta-error",
      };
      dispacth({
        type: ERROR_LOGIN,
        payload: alert,
      });
    }
  };

  const userAutenticateFn = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const request = await clientAxios.get("/api/auth");
      dispacth({
        type: GET_USER,
        payload: request.data.usuario,
      });
    } catch (error) {
      console.log(error.response);
      dispacth({
        type: ERROR_LOGIN,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        user: state.user,
        menssage: state.menssage,
        authenticated: state.authenticated,
        registerUserFn,
        loginUserFn,
      }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
