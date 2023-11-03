import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Creating a Redux store with the rootReducer and middleware (including Thunk)
// Creando una store de Redux con el rootReducer y middleware incluyendo Thunk
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;  