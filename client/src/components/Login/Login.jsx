import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux"
import { login, newUser } from "../../redux/actions";

const Login = () => {
  const dispatch = useDispatch()
  const messageError = useSelector((state) => state.messageError)
  const [inputs, setInputs] = useState({email: "", password: "" })
  console.log(inputs);

  const handlerChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }
  const handlerSubmit = () => {
    if(inputs.email == "" || inputs.password == "") return
    dispatch(login(inputs))
  }
  const handleSignin = () => {
    if(inputs.email == "" || inputs.password == "") return
    dispatch(newUser(inputs))

  }

  return (
    <div className="main_form_login">
      <div className="form">
        <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={handlerChange}/>
        <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={handlerChange} />
        {messageError.length > 1 && <p>{messageError}</p>}
      </div>
      <div className="btn_add">
        <button onClick={handlerSubmit} type="submit">Log In</button>
        <p>
          No tienes cuenta? <button onClick={handleSignin}>registrate</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
