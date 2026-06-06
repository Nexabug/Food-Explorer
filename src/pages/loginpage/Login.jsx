import React from "react";

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
        <div>
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
