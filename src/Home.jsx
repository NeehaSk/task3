import React from 'react';
import './Home.css';
import home1 from '/home1.jpg';
import home4 from '/home4.gif';
import home2 from '/home2.jpg';
import home6 from '/home6.jpg';
import home3 from '/home3.jpg';

export default function DocHomepage() {
  return (
    <div className="home-wrapper">
      <div className="container-fluid py-5 position-relative main-content">
        {/* Adjusted Heading Section */}
        <div className="text-center mb-4 header-section">
          <h1 className="clinic-title-home">Medical Clinic</h1>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* Central Hero Image */}
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-lg-5 text-center hero-container">
            <img 
              className="img-fluid main-hero-img rounded-circle border-4 border-primary shadow" 
              src={home1} 
              alt="Main Hero Illustration" 
            />
          </div>
        </div>

        {/* Floating Corner Images */}
        <div className="corner-images-container">
          <div className="corner-img-wrapper top-left-corner">
            <img src={home6} alt="Pediatrics" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="corner-img-wrapper top-right-corner">
            <img src={home3} alt="Nursing" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="corner-img-wrapper bottom-left-corner">
            <img src={home2} alt="Pharmacy" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="corner-img-wrapper bottom-right-corner">
            <img src={home4} alt="Diagnostics" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}