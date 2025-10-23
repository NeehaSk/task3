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

  return (
    
    <div className="main-container">
      <h1 align="center">Doctors List</h1>
      <div className="grid-container">
        {doctors.map((i) => (
          <div className="doctor-card" key={i.id}>
            <h4>{i.name}</h4>
            <p><b>Age:</b> {i.age}</p>
            <p><b>Gender:</b> {i.gender}</p>
            <p><b>Salary:</b> {i.salary}</p>
            <p><b>Specialization:</b> {i.specialization}</p>
            <button onClick={() => deleteDoctor(i.id)}>Delete</button>
          </div>
          
        ))}
      </div>
    </div>
  );
}
