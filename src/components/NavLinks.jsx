import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="navlinks">
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>about us</button>
      </Link>
      <Link to="/login">
        <button className="login-btn">login</button>
      </Link>
    </div>
  );
}

export default NavLinks;
