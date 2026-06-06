import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="h">
      <div className="body">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
