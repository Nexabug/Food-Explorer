import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notfound">
      <Logo />
      <img
        src="/pagenotfound-img-removebg-preview.png"
        alt="404 not found"
        className="notfoundimg"
      />
      <h1 className="heading">OOPS! THIS <em>PAGE</em> LOOKS LIKE IT GOT <em>EATEN</em></h1>
      <p className="content">the page you're looking for doesn't exist or has been moved</p>
      <Link to="/">
        <button className="btn">Start Exploring</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
