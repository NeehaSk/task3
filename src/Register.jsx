import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {
      name,
      age,
      gender,
      salary,
      specialization,
    };

    console.log("Doctor data:", newDoctor);

    axios
      .post("https://doc-back.onrender.com/doctors", newDoctor)
      .then((res) => {
        console.log("Response:", res);
        alert("Doctor registered successfully!");
        setName("");
        setAge("");
        setGender("");
        setSalary("");
        setSpecialization("");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong! Please try again.");
      });
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <div className="register-img"></div>

        <div className="register-form">
          <h1>Doctor Registration Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="register-form-group">
              <label>Name </label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="register-form-group">
              <label>Age</label>
              <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="register-form-group">
              <label>Gender</label>
              <input
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>

            <div className="register-form-group">
              <label>Salary</label>
              <input
                type="number"
                placeholder="Enter salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </div>

            <div className="register-form-group">
              <label>Specialization</label>
              <input
                type="text"
                placeholder="Enter specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="register-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}