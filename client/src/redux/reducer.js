import { LOGIN, DELETETAKS, UPDATETAKS, GETALLTAKS, CREATETAKS   } from "./actions";

const globalState = {
    IdUser: null,
    taks: [],
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
            messageError: error
        }
        case GETALLTAKS: 
        console.log("entre al case",action.payload)
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