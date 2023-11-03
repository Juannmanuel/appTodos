import { useEffect } from "react";
import "./App.css";
import SelectFilter from "./components/SelectFilter/SelectFilter";
import TaksForm from "./components/TaksForm/TaksForm";
import Taks from "./components/Taks/Taks";
import Login from "./components/login/login";
import { useSelector } from "react-redux";

function App() {
  let access = useSelector((state) => state.access)
  let taks = useSelector((state) => state.taks)
  useEffect(() => {},[taks])




 

// Conditional rendering based on 'access' state, if not logged in, If logged in, display task-related components
  return (
    <div>
      
      {!access ? (
        <div className="main_app">
          {" "}
          <Login />{" "}
        </div>
      ) : (
        <div className="main_app">
          <TaksForm  />
          <Taks taks={taks} />
          <SelectFilter />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
