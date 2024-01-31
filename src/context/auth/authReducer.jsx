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
    case USER_LOGIN:
    case SUCCESS_REGISTRATION:
      return {
        ...state,
        authenticated: true,
        menssage: null,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        menssage: null,
      };
    case ERROR_LOGIN:
    case ERROR_REGISTRATION:
      localStorage.removeItem("token");
      return {
        token: null,
        menssage: action.payload,
      };
    default:
      return state;
  }
};
