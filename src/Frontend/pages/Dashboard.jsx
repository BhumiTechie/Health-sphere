import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="modern-patient-dashboard">
      
      {/* Left Profile Panel */}
      <div className="left-profile-panel">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/80"
            alt="Patient Avatar"
            className="avatar"
          />
          <h3>Mahak Sen</h3>
          <p>Patient ID: <span>#12345</span></p>
          <p>Age: <span>21</span></p>
          <p>Blood Group: <span>B+</span></p>
        </div>
      </div>

      {/* Center Widgets */}
      <div className="center-widgets">
        <div className="widget-card gradient-blue">
          <h4>Heart Rate</h4>
          <p>72 bpm</p>
        </div>
        <div className="widget-card gradient-green">
          <h4>Blood Pressure</h4>
          <p>120/80 mmHg</p>
        </div>
        <div className="widget-card gradient-purple">
          <h4>Weight</h4>
          <p>58 kg</p>
        </div>
        <div className="widget-card gradient-orange">
          <h4>Glucose Level</h4>
          <p>90 mg/dL</p>
        </div>
      </div>

      {/* Right Appointments */}
      <div className="right-section">
        <div className="appointment-card">
          <h4>Upcoming Appointment</h4>
          <p><strong>Doctor:</strong> Dr. Sarah Lee</p>
          <p><strong>Specialty:</strong> Dermatologist</p>
          <p><strong>Date:</strong> 2024-12-10</p>
          <button className="btn">View Details</button>
        </div>
        <div className="appointment-card">
          <h4>Pending Appointment</h4>
          <p><strong>Doctor:</strong> Dr. John Josi</p>
          <p><strong>Specialty:</strong> Orthopedic</p>
          <p><strong>Date:</strong> 2024-12-15</p>
          <button className="btn">Confirm Now</button>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
