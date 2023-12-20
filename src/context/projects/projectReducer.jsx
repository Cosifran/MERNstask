//Import type
import {
  FORMULARY_PROJECT,
  GET_PROJECT,
  SET_PROJECT,
  DELETE_PROJECT,
  CURRENT_PROJECT,
  VALIDATION_FORMULARY,
} from "../../types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case FORMULARY_PROJECT:
      return {
        ...state,
        newForm: true,
      };
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case SET_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        newForm: false,
        errorFormulary: false,
      };
    case VALIDATION_FORMULARY:
      return {
        ...state,
        errorFormulary: true,
      };
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };

    default:
      return state;
  }
};
