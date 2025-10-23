import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Patients.css'

export default function Patients() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    loadPatients()
  }, [])

  function loadPatients() {
    axios.get("https://doc-back.onrender.com/patients")
      .then((res) => {
        setPatients(res.data)
      })
  }

  return (
    <div className='background'>
      <h1 align="center">Patients List</h1>
    <div className="patients-container">
      {
        patients.map((i) => (
          <div className="patient-card" key={i.id}>
            <p><b>Name:</b> {i.name}</p>
            <p><b>Age:</b> {i.age}</p>
            <p><b>Gender:</b> {i.gender}</p>
            <p><b>Weight:</b> {i.weight}</p>
            <p><b>Disease:</b> {i.disease}</p>
            <p><b>Doctor:</b> {i.doctor.name}</p>
            <p><b>Specialization:</b> {i.doctor.specialization}</p>
          </div>
         

        ))
      }
    </div>
    
    </div>
    
  )
}
