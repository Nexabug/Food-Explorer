import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <div>
          <span>email</span>
          <input
            type="text"
            placeholder="Email"
            defaultValue={"fusion69@gmail.com"}
          />
        </div>
        <div>
          <span>password</span>
          <input
            type="password"
            placeholder="Password"
            defaultValue={"jackass"}
          />
        </div>

        <Link to="/app">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
