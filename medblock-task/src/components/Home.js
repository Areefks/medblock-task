import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="div">
        <Link to={`/register`}>
          <button className="button btn1">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
