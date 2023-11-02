import { useEffect, useState } from "react";
import "./App.css";
import SelectFilter from "./components/SelectFilter/SelectFilter";
import TaksForm from "./components/TaksForm/TaksForm";
import Taks from "./components/Taks/Taks";

import Signin from "./components/Signin/Signin";
import Login from "./components/login/login";
import { useSelector } from "react-redux";

function App() {
  let access = useSelector((state) => state.access)
  console.log(access);

  return (
    <div>
      {!access ? (
        <div className="main_app">
          {" "}
          <Login />{" "}
        </div>
      ) : (
        <div className="main_app">
          <TaksForm />
          <Taks />
          <SelectFilter />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
