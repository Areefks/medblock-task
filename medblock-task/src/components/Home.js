import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div className="home">
      <h1
        style={{
          margin: "20px",
          textAlign: "center",
          backgroundImage: "linear-gradient(to right,lightgreen, yellow)",
        }}
      >
        Medblocks
      </h1>
      <div
        style={{ margin: "20px", gap: "50px" }}
        className="btn d-flex flex-row"
      >
        <Link to={`/register`}>
          <button className="btn btn-secondary btn-lg">Register</button>
        </Link>
        <Link to={`/list`}>
          <button className="btn btn-secondary btn-lg">Patient List</button>
        </Link>
        <Link to={`/tree`}>
          <button className="btn btn-secondary btn-lg">Tree</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
