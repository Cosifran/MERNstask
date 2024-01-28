import {
  GET_USER,
  SIGN_OUT,
  ERROR_LOGIN,
  USER_LOGIN,
  ERROR_REGISTRATION,
  SUCCESS_REGISTRATION,
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case SUCCESS_REGISTRATION:
      localStorage.setItem('token', action.payload.token)
      return{
        ...state,
        authenticated: true,
        menssage: null
      }
    case ERROR_LOGIN:
    case ERROR_REGISTRATION:
      return{
        token:null,
        menssage: action.payload
      }
    default:
      return state;
  }
};
