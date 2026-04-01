import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Patients.css";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  function loadPatients() {
    axios
      .get("https://doc-back.onrender.com/patients")
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => console.log("Error loading patients:", err));
  }

  return (
    <div className="patients-list-wrapper">
      <div className="container py-4">
        <div className="text-center mb-4 hero-section">
          <h2 className="fw-bold text-dark fs-2">Patient Directory</h2>
        </div>

        <div className="row g-4 justify-content-center px-2">
          {patients.length > 0 ? (
            patients.map((i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i.id}>
                <div className="card h-100 patient-info-card border-0 shadow-sm rounded-4">
                  <div className="card-body p-4 p-lg-5">
                    <h5 className="fw-bold text-dark mb-4 text-center">{i.name}</h5>
                    
                    <div className="row g-0 mb-4 ls-1">
                       <div className="col-6 mb-2 border-end pe-2 text-center">
                          <small className="text-muted d-block x-small">AGE</small>
                          <span className="fw-semibold">{i.age} yrs</span>
                       </div>
                       <div className="col-6 ps-3 text-center">
                          <small className="text-muted d-block x-small text-uppercase">{i.gender}</small>
                          <span className="fw-semibold">{i.weight} kg</span>
                       </div>
                    </div>

                    <div className="pt-3 border-top diagnosis-section">
                       <p className="small mb-1"><strong>Symptoms/Disease:</strong> <span className="text-danger-emphasis fw-medium">{i.disease}</span></p>
                       <p className="small mb-0"><strong>Assigned:</strong> Dr. {i.doctor.name} ({i.doctor.specialization})</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                   <span className="visually-hidden">Loading patients...</span>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}