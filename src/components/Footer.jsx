import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Food Explorer</p>
      <p>
        Discover, save, and organize your favorite food destinations around the
        world.
      </p>
      <ul className="footer-links">
        <Link to="/">
          <ol>Home</ol>
        </Link>
        <Link to="/about">
          <ol>About</ol>
        </Link>
        <Link to="/login">
          <ol>Login</ol>
        </Link>
      </ul>
      <p>
        Explore © {new Date().getFullYear()} Food Explorer. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
