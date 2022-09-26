import React from "react";
import { Link } from "react-router-dom";
function Header({ home, register, list, tree }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="header">
        Medblocks
      </h1>
      <nav style={{ gap: "10px" }} className="nav-bar d-flex flex-row">
        {home && (
          <Link className="nav-anchor" to={"/"}>
            <button className="btn btn-secondary nav-btn">Home</button>
          </Link>
        )}
        {register && (
          <Link className="nav-anchor" to={"/register"}>
            <button className="btn btn-secondary nav-btn">Register</button>
          </Link>
        )}
        {list && (
          <Link className="nav-anchor" to={"/list"}>
            <button className="btn btn-secondary nav-btn">List</button>
          </Link>
        )}
        {tree && (
          <Link className="nav-anchor" to={"/tree"}>
            <button className="btn btn-secondary nav-btn">Tree</button>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
