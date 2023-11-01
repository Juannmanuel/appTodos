import { LOGIN, DELETETAKS, UPDATETAKS, GETALLTAKS, CREATETAKS   } from "./actions";

const globalState = {
    login: false
  };
  

  function rootReducer(state = globalState, action) {
    switch (action.type) {
        default:
        return {
            ...state
        }
    }
}
export default rootReducer;