import React from 'react';
import { Link } from 'react-router-dom';
import './DocNavbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-blue py-2 shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <i className="bi bi-hospital-fill me-2 fs-3 text-white"></i>
          <span>Medical Clinic</span>
        </Link>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAlt" 
          aria-controls="navbarNavAlt" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAlt">
          <div className="navbar-nav gap-lg-3">
            <Link className="nav-link px-3" to="/">Home</Link>
            <Link className="nav-link px-3" to="/Register">Register</Link>
            <Link className="nav-link px-3" to="/Login">Login</Link>
            <Link className="nav-link px-3" to="/DoctorsPage">DoctorsPage</Link>
            <Link className="nav-link px-3" to="/Patients">Patients List</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
