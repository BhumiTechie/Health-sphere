import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="text-content">
          <h1>Welcome to <span>Health Sphere</span></h1>
          <p>
            We are redefining healthcare with innovation, accessibility, and care at 
            the forefront. At Health Sphere, our goal is to connect people with 
            exceptional healthcare services that empower them to live their healthiest lives.
          </p>
          <p>
            From virtual consultations to personalized care plans, Health Sphere 
            is your trusted partner in making healthcare simple, efficient, and 
            effective. Let's revolutionize your health journey together.
          </p>
        
        </div>
        <div className="image-content">
          <img
            src="https://www.thewmch.com/wp-content/uploads/2023/02/female-doctor-using-her-digital-tablet-free-vector.jpg"
            alt="Healthcare innovation"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
