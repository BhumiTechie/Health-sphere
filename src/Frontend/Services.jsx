import React, { useState } from "react";
import "./Services.css";
import {
  FaHome,
  FaCalendarAlt,
  FaUserMd,
  FaFileInvoice,
} from "react-icons/fa";

const Services = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div className="dashboard-content">
            <h1>Dashboard</h1>
            <div className="overview-section">
              <div className="overview-card">
                <h4>Appointments Today</h4>
                <p>3 Scheduled</p>
              </div>
              <div className="overview-card">
                <h4>Active Doctors</h4>
                <p>15 Doctors Available</p>
              </div>
              <div className="overview-card">
                <h4>Total Billing</h4>
                <p>$2,500</p>
              </div>
            </div>
            <div className="dashboard-section">
              <h2>Recent Activity</h2>
              <ul>
                <li>Checked in with Dr. Smith (Cardiologist)</li>
                <li>Prescription updated for blood pressure.</li>
                <li>Payment of $250 for consultation.</li>
              </ul>
              <h2>Health Statistics</h2>
              <div className="placeholder-chart">[Chart Placeholder]</div>
            </div>
          </div>
        );
      case "appointments":
        return (
          <div className="appointments-content">
            <h1>Appointments</h1>
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Specialty</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-12-10</td>
                  <td>Dr. Sarah Lee</td>
                  <td>Dermatologist</td>
                  <td>Confirmed</td>
                  <td>
                    <button className="btn">Cancel</button>
                  </td>
                </tr>
                <tr>
                  <td>2024-12-15</td>
                  <td>Dr. John Doe</td>
                  <td>Orthopedic</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn">Confirm</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "doctors":
        return (
          <div className="doctors-content">
            <h1>Doctors</h1>
            <div className="doctor-list">
              <div className="doctor-card">
                <h4>Dr. Sarah Lee</h4>
                <p>Dermatologist</p>
                <button className="btn">View Profile</button>
              </div>
              <div className="doctor-card">
                <h4>Dr. John Doe</h4>
                <p>Orthopedic</p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="billing-content">
            <h1>Billing</h1>
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>2024-12-01</td>
                  <td>$250</td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <td>#1002</td>
                  <td>2024-12-03</td>
                  <td>$500</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return <p>Select a page to display its content.</p>;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="brand-title">Health Sphere</h2>
        <ul className="sidebar-menu">
          <li
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            <FaHome className="menu-icon" /> Dashboard
          </li>
          <li
            className={activePage === "appointments" ? "active" : ""}
            onClick={() => setActivePage("appointments")}
          >
            <FaCalendarAlt className="menu-icon" /> Appointments
          </li>
          <li
            className={activePage === "doctors" ? "active" : ""}
            onClick={() => setActivePage("doctors")}
          >
            <FaUserMd className="menu-icon" /> Doctors
          </li>
          <li
            className={activePage === "billing" ? "active" : ""}
            onClick={() => setActivePage("billing")}
          >
            <FaFileInvoice className="menu-icon" /> Billing
          </li>
        </ul>
      </aside>

      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default Services;
