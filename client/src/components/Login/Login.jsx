import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux"
import { loginUser, newUser } from "../../redux/actions";
import validation from "../../functions/validation";

export default function Login ()  {
  const dispatch = useDispatch()
  const messageError = useSelector((state) => state.messageError)
  const [showLogin, setShowLogin] = useState(true);
  const [inputs, setInputs] = useState({email: "", password: "" })
  const [error, setError] = useState({})

  // Function to handle input changes and validate inputs
  const handlerChange = (event) => {
    const { name, value } = event.target
    setInputs({
      ...inputs,
      [name]: value
    })
    setError(
      validation({
        ...inputs,
        [name]: value,
      })
    );
  }
    // Function to handle login submission
  const handlerSubmit = () => {
    console.log(inputs);
    if(inputs.email == "" || inputs.password == "") return alert(`Faltan campos obligatorios`)
    dispatch(loginUser(inputs))
  }
  
  // Function to handle new user registration
  const handleSignin = () => {
 
    if(inputs.email == "" || inputs.password == "") return alert(`Faltan campos obligatorios`)
    dispatch(newUser(inputs))

  }

  return (
    <div className="main_form_login">
    {showLogin ? (
      <div className="container">
        <h2 className="titulo">Login</h2>
        <div className="form">
          <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handlerChange} />
          {error.email && <p>{error.email}</p>}
          <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handlerChange} />
          {error.password && <p>{error.password}</p>}
        </div>
        {messageError.length > 1 && <p>{messageError}</p>}
        <div className="btn_add">
          <button onClick={handlerSubmit} type="submit">Log In</button>
          <p>
            Don't have an account?{" "}
            <button onClick={() => setShowLogin(false)} className="register">
              Register
            </button>
          </p>
        </div>
      </div>
    ) : (
      <div className="container">
        <h2 className="titulo">Signin</h2>
        <div className="form">
          <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handlerChange} />
          {error.email && <p>{error.email}</p>}
          <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handlerChange} />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="btn_add">
          <button type="submit" onClick={handleSignin}>Register</button>
          <p>
            Already have an account?{" "}
            <button onClick={() => setShowLogin(true)} className="register">
              Log In
            </button>
          </p>
        </div>
      </div>
    )}
  </div>
  );
};

