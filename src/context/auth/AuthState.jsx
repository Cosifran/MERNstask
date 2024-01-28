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
      console.log(reply);

      dispacth({
        type: SUCCESS_REGISTRATION,
        payload: reply.data,
      });

      //obtener al usuario
      userAutenticateFn()
    } catch (error) {
      console.log(error.response);
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

  const userAutenticateFn = async () => {
    const token = localStorage.getItem('token')
    console.log('token', token)

    if(token){
      tokenAuth(token)
    }

    try {
      const request = await clientAxios.get('/api/auth')
      console.log(request)

      
    } catch (error) {
      console.log(error.response)
      dispacth({
        type: ERROR_LOGIN,
      })
    }
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        user: state.user,
        menssage: state.menssage,
        authenticated: state.authenticated,
        registerUserFn,
      }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
