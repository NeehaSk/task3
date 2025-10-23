import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function PatientRegister() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [disease, setDisease] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpecialization, setDoctorSpecialization] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      name,
      age,
      gender,
      weight,
      disease,
      doctor: {
        name: doctorName,
        specialization: doctorSpecialization,
      },
    };

    console.log("Patient Data:", newPatient);

    axios
      .post("https://doc-back.onrender.com/patients", newPatient)
      .then((res) => {
        console.log("Response:", res);
        alert("Patient registered successfully!");
        setName("");
        setAge("");
        setGender("");
        setWeight("");
        setDisease("");
        setDoctorName("");
        setDoctorSpecialization("");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong! Please try again.");
      });
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-img"></div>

        <div className="login-form">
          <h1 align="center">Patient Portal</h1>

          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label>Age</label>
              <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label>Gender</label>
              <input
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label>Disease</label>
              <input
                type="text"
                placeholder="Enter disease"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                required
              />
            </div>

            <h3>Doctor Information</h3>

            <div className="login-form-group">
              <label>Doctor Name</label>
              <input
                type="text"
                placeholder="Enter doctor's name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label>Doctor Specialization</label>
              <input
                type="text"
                placeholder="Enter doctor's specialization"
                value={doctorSpecialization}
                onChange={(e) => setDoctorSpecialization(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}