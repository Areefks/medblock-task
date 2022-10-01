import React, { useState } from "react";
import { instance } from "./axios";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";

function Register(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    telecom: "",
  });

  const patientRegistration = async () => {
    const payload = {
      resourceType: "Patient",
      name: [{ given: [state.firstName], family: state.lastName }],
      gender: state.gender,
      birthDate: state.dateOfBirth,
      telecom: [{ value: state.telecom }],
    };

    if (
      state.gender !== "" &&
      state.firstName !== "" &&
      (state.telecom.length >= 10 || state.telecom === "")
    ) {
      console.log(payload);

      await instance.post("/Patient", payload).then((res) => {
        if (res.status === 200 || 201) {
          alert("registration successful");
        } else {
          alert("registration failed");
        }
      });
    } else {
      alert("Fill The required fields");
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    patientRegistration();
  };
  return (
    <div style={{ margin: "20px" }}>
      <Header home list tree />
      <hr></hr>
      <form
        action="/register"
        method="post"
        id="registerForm"
        onSubmit={handleSubmitClick}
      >
        <span style={{ width: "fit-content", display: "flex" }}>
          <div>
            <label style={{ margin: "20px" }}>FirstName:*</label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={state.firstName}
              required
            />
          </div>
          <div>
            <label style={{ margin: "20px" }}>LastName:</label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={state.lastName}
            />
          </div>
        </span>
        <br></br>
        <span>
          <div>
            <label style={{ margin: "20px" }} htmlFor="gender">
              Choose a Gender:*
            </label>

            <select
              id="gender"
              value={state.gender}
              name="gender"
              onChange={handleChange}
              required
            >
              <option></option>

              <option value="non-binary">Non-binary</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </span>
        <br></br>
        <div>
          <label style={{ margin: "20px" }} htmlFor="birthday">
            Birthday:
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={state.dateOfBirth}
            onChange={handleChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label style={{ margin: "20px" }} htmlFor="telecom">
            Telephone Number
          </label>
          <input
            id="telecom"
            name="telecom"
            maxLength="10"
            value={state.telecom}
            type="tel"
            onChange={handleChange}
            placeholder="Enter telephone number"
          ></input>
        </div>
        <button
          className="btn btn-secondary"
          style={{ margin: "20px" }}
          type="submit"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
