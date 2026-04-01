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

    axios
      .post("https://doc-back.onrender.com/patients", newPatient)
      .then((res) => {
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
    <div className="login-wrapper">
      <div className="container py-2 py-md-4 h-100 d-flex align-items-center justify-content-center">
        <div className="row g-0 login-container shadow-lg border-0 rounded-4 overflow-hidden w-100">
          {/* Left Side Image Section - Corrected path for public folder asset */}
          <div className="col-lg-6 p-0 d-none d-lg-block image-side-container">
            <img 
               src="/patient2.jpg" 
               alt="Patient Intake Consultation" 
               className="w-100 h-100 object-fit-contain p-4"
            />
          </div>

          {/* Form Side Section - Clean and Responsive */}
          <div className="col-lg-6 bg-white d-flex flex-column justify-content-center p-4 p-md-5">
            <div className="text-center mb-4">
              <h1 className="fw-bold text-dark display-6 mb-1">Patient Portal</h1>
              <p className="text-muted small">Clinical Registration & Intake</p>
            </div>

            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter patient name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="col-6 col-md-4">
                <label className="form-label fw-bold">Age</label>
                <input
                  type="number"
                  className="form-control form-control-md"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className="col-6 col-md-4">
                <label className="form-label fw-bold">Gender</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label fw-bold">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control form-control-md"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-bold">Disease/Symptoms</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Primary diagnosis or symptoms"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                  required
                />
              </div>

              <div className="col-12 mt-3 pt-3 border-top">
                <p className="text-primary fw-bold small mb-2 text-uppercase ls-1">Recommended Specialist</p>
                <div className="row g-2">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Doctor name"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Specialization"
                      value={doctorSpecialization}
                      onChange={(e) => setDoctorSpecialization(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 mt-4 pt-1">
                <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm login-submit-btn">
                   Register Patient Record
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}