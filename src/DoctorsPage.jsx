import React, { useState, useEffect } from "react";
import "./DoctorsPage.css";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  function loadDoctors() {
    fetch("https://doc-back.onrender.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log("Error fetching data:", err));
  }

  function deleteDoctor(id) {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      fetch(`https://doc-back.onrender.com/doctors/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            alert("Deleted Successfully");
            loadDoctors();
          }
        })
        .catch((err) => console.log("Error deleting doctor:", err));
    }
  }

  return (
    <div className="doctors-list-wrapper">
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-2 text-dark">Doctors Registry</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {doctors.length > 0 ? (
            doctors.map((i) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i.id}>
                <div className="card h-100 doctor-profile-card shadow-sm border">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-dark mb-3">Dr. {i.name}</h5>
                    <div className="doctor-details">
                      <p className="card-text mb-1"><strong>Specialization:</strong> {i.specialization}</p>
                      <p className="card-text mb-1"><strong>Gender:</strong> {i.gender}</p>
                      <p className="card-text mb-1"><strong>Salary:</strong> ${i.salary}</p>
                      <p className="card-text mb-3"><strong>Age:</strong> {i.age} yrs</p>
                    </div>
                    <button 
                      onClick={() => deleteDoctor(i.id)} 
                      className="btn btn-danger btn-sm w-100 mt-2"
                    >
                      Delete Profile
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}