import { LOGIN, GETALLTAKS, FILTERTAKS   } from "./actions";

const globalState = {
    IdUser: null,
    taks: [],
    backupTaks: [],
    access: false,
    messageError: ""
  };
  

  function rootReducer(state = globalState, action) {
    switch (action.type) {
        case LOGIN: 
        // Updating state based on the LOGIN action
        // Actualizando el estado basado en la acción LOGIN
        const error = action.payload.access === false && action.payload.error
         return {
            ...state,
            access: action.payload.access,
            IdUser: action.payload.IdUser,
            taks: action.payload.Taks,
            backupTaks: action.payload.Taks,
            messageError: error
        }
        case GETALLTAKS: 
        return {
            ...state,
            taks: action.payload,
            backupTaks: action.payload
        }
        case FILTERTAKS: 
        return {
            ...state,
            taks: action.payload
        }
        default:
        return {
            ...state
        }
    }
}
export default rootReducer;