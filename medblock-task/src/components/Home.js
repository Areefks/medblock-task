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
        }}
      >
        Medblocks
      </h1>
      <div>
        <ul
          style={{
            marginTop: "120px",
            marginRight: "55px",
            textAlign: "center",
          }}
        >
          <Link to={`/register`}>
            <ul>
              <button className="btn btn-secondary btn-lg">Register</button>
            </ul>
          </Link>
          <br></br>
          <Link to={`/list`}>
            <ul>
              <button className="btn btn-secondary btn-lg">Patient List</button>
            </ul>
          </Link>
          <br></br>
          <Link to={`/tree`}>
            <ul>
              <button className="btn btn-secondary btn-lg">Tree</button>
            </ul>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Home;
