import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo-app.png"
        alt="Logo"
        className="logo"
      />
    </Link>
  );
}

export default Logo;
