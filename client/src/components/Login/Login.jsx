import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux"
import { loginUser, newUser } from "../../redux/actions";

export default function Login ()  {
  const dispatch = useDispatch()
  const messageError = useSelector((state) => state.messageError)
  const [showLogin, setShowLogin] = useState(true);
  const [inputs, setInputs] = useState({email: "", password: "" })
  console.log(inputs);

  const handlerChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }
  const handlerSubmit = () => {
    if(inputs.email == "" || inputs.password == "") return alert(`Faltan campos obligatorios`)
    dispatch(loginUser(inputs))
  }
  const handleSignin = () => {
    console.log("entré");
    if(inputs.email == "" || inputs.password == "") return alert(`Faltan campos obligatorios`)
    dispatch(newUser(inputs))

  }

  return (
    <div className="main_form_login">
      {showLogin ? (
        <div className="container">
          <h2 className="titulo">Iniciar Sesion</h2>
          <div className="form">
          <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handlerChange}/>
          <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handlerChange} />
          </div>
          {messageError.length > 1 && <p>{messageError}</p>}
          <div className="btn_add">
          <button onClick={handlerSubmit} type="submit">Log In</button>
            <p>
              No tienes cuenta?{" "}
              <button onClick={() => setShowLogin(false)} className="register">
                Regístrate
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="titulo">Registrarme</h2>
          <div className="form">
            <input type="email" placeholder="Email" name="email"  value={inputs.email} onChange={handlerChange} />
            <input type="password" placeholder="Password" name="password"  value={inputs.password} onChange={handlerChange} />
          </div>
          <div className="btn_add">
            <button type="submit" onClick={handleSignin}>Registrarme</button>
            <p>
              Ya tienes cuenta?{" "}
              <button onClick={() => setShowLogin(true)} className="register">
                Iniciar Sesión
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

