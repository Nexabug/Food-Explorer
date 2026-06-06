import React from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import { Link, NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <div className="city-country">
        <div className="Toggel-city">
          <NavLink to="cities">city</NavLink>
          <NavLink to="country">country</NavLink>
        </div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Sidebar;
