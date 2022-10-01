import React, { useState } from "react";
import Header from "./Header";
import Recursive from "./Recursive";
import "bootstrap/dist/css/bootstrap.css";

function Tree() {
  const [data, setData] = useState("");

  let fileReader;

  const handleFileData = (e) => {
    const content = fileReader.result;
    sessionStorage.setItem("tree", content);
    const data = JSON.parse(sessionStorage.getItem("tree"));
    console.log(data);
    setData(data);
  };

  const handleFile = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileData;
    fileReader.readAsText(file);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Header home register list />
      <hr></hr>
      <div
        style={{ width: "fit-content", marginTop: "40px", marginLeft: "180px" }}
      >
        <input
          type="file"
          id="file"
          className="input-file"
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>
      <br></br>
      {data && <Recursive data={data} />}
    </div>
  );
}

export default Tree;
