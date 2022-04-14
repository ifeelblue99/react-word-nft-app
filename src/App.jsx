import "./App.css";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "gray",
            };
          }}
          to="/main"
        >
          Home
        </NavLink>
        {"  "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "gray",
            };
          }}
          to="/create"
        >
          Create NFT
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
