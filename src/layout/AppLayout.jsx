import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
function AppLayout() {
  return (
    <div className="app">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
