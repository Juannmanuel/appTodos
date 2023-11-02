import React from 'react';
import './signin.css';

const Signin = () => {
  return (
    <div className="main_form_signin">
      <div className="form_signin">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div className="btn_add">
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Signin;
