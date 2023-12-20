//Import types
import {
  GET_ASK,
  ADD_ASK,
  STATE_ASK,
  DELETE_ASK,
  UPDATE_ASK,
  CURRENT_ASK,
  VALIDATION_ASK,
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case GET_ASK:
      return {
        ...state,
        askProject: state.asks.filter(
          (ask) => ask.idProject === action.payload
        ),
      };

    case ADD_ASK:
      return {
        ...state,
        asks: [action.payload, ...state.asks],
        errorAsk: false,
      };

    case VALIDATION_ASK:
      return {
        ...state,
        errorAsk: true,
      };

    case DELETE_ASK:
      return {
        ...state,
        asks: state.asks.filter((ask) => ask.id !== action.payload),
      };
    case UPDATE_ASK:
    case STATE_ASK:
      return {
        ...state,
        asks: state.asks.map((ask) =>
          ask.id === action.payload.id ? action.payload : ask
        ),
        currentAsk: null,
      };

    case CURRENT_ASK:
      return {
        ...state,
        currentAsk: action.payload,
      };

    default:
      return state;
  }
};
