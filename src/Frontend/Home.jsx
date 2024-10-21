import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './images/HealthSphere.jpg'; // Import your logo here

function Home() {
  return (
    <div className="home">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Health Sphere Logo" className='imgg' />
          <span className='he'>Health Sphere </span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>


      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Health, <br/> Our Priority</h1>
          <p className="hero-text">Explore world-class healthcare services at your fingertips.</p>
          <Link to="/services" className="cta-button">Get Started</Link>
        </div>
     
      </section>
      <div className="hero-illustration">
       
       <img src="src/Frontend/images/doctor img.jpg"alt="" className='doc'/>
      
       </div>
       

      <section className="features-section">
        <div className="feature-card">
          <h3>24/7 Consultation</h3>
          <p>Consult top doctors anytime, anywhere with instant access to healthcare.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Appointments</h3>
          <p>Schedule appointments easily and get reminders for follow-ups.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Records</h3>
          <p>Access and manage your health records securely in one place.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 HealthCare+. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
