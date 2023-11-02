import { LOGIN, DELETETAKS, UPDATETAKS, GETALLTAKS, CREATETAKS   } from "./actions";

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
            taks: action.payload
        }
        case "FILTRO_COMPLETO":
            return {
                ...state,
                taks: state.taks.filter((item) => item.completed == true)
            }
        case "FILTRO_PENDIENTE": 
        console.log("entré");
            return {
                ...state,
                taks: state.taks.filter((item) => item.completed === false)
            }
        case  "FILTRO_URGENCIA": 
        return {
            ...state,
            taks: state.taks.filter((item) => item.priority == "Urgent")
        }
        case "FILTRO_MEDIA": 
        return {
            ...state,
            taks: state.taks.filter((item) => item.priority == "Important")

        }
        case  "FILTRO_REGULAR": 
        return {
            ...state,
            taks: state.taks.filter((item) => item.priority == "Regular")
        } 
        default:
        return {
            ...state
        }
    }
}
export default rootReducer;