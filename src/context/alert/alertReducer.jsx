//import types
import { GET_ALERT, DELETE_ALERT } from "../../types";

export default (state, action) => {
    switch(action.type){
        case GET_ALERT:
            return {
                alert: action.payload
            }
        case DELETE_ALERT:
            return{
                alert: null
            }
        
    }
}