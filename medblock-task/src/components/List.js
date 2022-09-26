import React, { useState, useEffect } from "react";
import { instance } from "./axios";
import Header from "./Header";

function List() {
  const [lists, setList] = useState([]);

  const getList = async () => {
    let data = await instance.get("/Patient");
    return data;
  };

  useEffect(() => {
    getList().then(
      (response) => {
        let lists = response.data;
        setList(lists);
        lists?.entry.map((e) => console.log(Object.values(e)));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div style={{ margin: "20px" }}>
      <Header home register tree />
      <hr></hr>
      <div>Total Patients : {JSON.stringify(lists.total)}</div>
      <br></br>
      <div
        style={{
          margin: "0 30px",
        }}
      >
        <ol>
          {lists?.entry?.map((list) => (
            <li key={list.resource.id}>
              <span style={{ display: "flex", gap: "50px" }}>
                <div>
                  {`${list?.resource.name[0].given} ${list.resource?.name[0].family}`}
                </div>
                <div>
                  {list.resource?.birthDate ? (
                    <span>{`${
                      new Date().getFullYear() -
                      list.resource.birthDate?.split("-")[0]
                    } years`}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div>{list.resource.gender}</div>
              </span>
              <br></br>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default List;
