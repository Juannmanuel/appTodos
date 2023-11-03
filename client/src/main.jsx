import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
axios.defaults.baseURL = `http://localhost:3001`;
// axios.defaults.baseURL = "https://countriesback2-production.up.railway.app/"
//esto lo comente por que queria deployar con versel y no tuve tiempo

ReactDOM.createRoot(document.getElementById("root")).render(
  //Solo traje a provider para poder usar mi estado global
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
