import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/ChatGPT_Image_Jun_6__2026__01_46_07_PM-removebg-preview.png"
        alt="Logo"
        className="logo"
      />
    </Link>
  );
}

export default Logo;
