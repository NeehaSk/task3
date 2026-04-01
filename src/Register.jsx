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

    axios
      .post("https://doc-back.onrender.com/doctors", newDoctor)
      .then((res) => {
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
    <div className="register-wrapper">
      <div className="register-container shadow-lg border-0 rounded-4 overflow-hidden">
        {/* FULL Image Section - Optimized for smaller container */}
        <div className="image-section d-none d-lg-block">
          <img 
              src="/reg_doctor_v2.jpg" 
              alt="Medical Team Illustration" 
              className="w-100 h-100 object-fit-contain" 
          />
        </div>

        {/* Clean, Non-Scrollable Form Section */}
        <div className="form-content-side bg-white px-4 px-md-5">
          <div className="text-center mb-4">
            <h1 className="fw-bold text-dark border-bottom-0">Doctor Registration</h1>
            <p className="text-muted small mb-0">Join our clinical network</p>
          </div>

          <form onSubmit={handleSubmit} className="px-lg-1">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-md-6 col-sm-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label className="form-label">Gender</label>
                <select 
                   className="form-select" 
                   value={gender} 
                   onChange={(e) => setGender(e.target.value)} 
                   required
                >
                   <option value="">Select</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="row g-2 mb-3">
              <div className="col-md-6 col-sm-6">
                <label className="form-label">Salary</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="e.g. 85000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Pediatrics"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-4 pt-1">
              <button type="submit" className="btn btn-primary w-100 py-2 fs-6 fw-bold register-btn">
                Submit and Save Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}