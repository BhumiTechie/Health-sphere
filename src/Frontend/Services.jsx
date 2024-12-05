import React, { useState } from 'react';
import './Services.css';
import { FaHome, FaCalendarAlt, FaUserMd, FaFileInvoice } from 'react-icons/fa';

const Services = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div className="dashboard-page">
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard page! Here you can view key statistics and quick insights.</p>
          </div>
        );
      case "appointments":
        return (
          <div className="appointments-page">
            <h1>Appointments</h1>
            <p>Manage all your upcoming and past appointments here.</p>
          </div>
        );
      case "doctors":
        return (
          <div className="doctors-page">
            <h1>Doctors</h1>
            <p>Browse or manage the list of doctors in our system.</p>
          </div>
        );
      case "billing":
        return (
          <div className="billing-page">
            <h1>Billing</h1>
            <p>View and manage your bills and payment history here.</p>
          </div>
        );
      default:
        return <p>Select a page to display its content.</p>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="brand-title">Health Sphere</h2>
        <ul className="sidebar-menu">
          <li className={activePage === "dashboard" ? "active" : ""} onClick={() => setActivePage("dashboard")}>
            <FaHome className="menu-icon" /> Dashboard
          </li>
          <li className={activePage === "appointments" ? "active" : ""} onClick={() => setActivePage("appointments")}>
            <FaCalendarAlt className="menu-icon" /> Appointments
          </li>
          <li className={activePage === "doctors" ? "active" : ""} onClick={() => setActivePage("doctors")}>
            <FaUserMd className="menu-icon" /> Doctors
          </li>
          <li className={activePage === "billing" ? "active" : ""} onClick={() => setActivePage("billing")}>
            <FaFileInvoice className="menu-icon" /> Billing
          </li>
        </ul>
      </aside>

      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h3>Welcome Back, Bhumaku!</h3>
          <p>Your health is our priority.</p>
        </div>
        <div className="header-right">
          <div className="header-info">
            <p>{new Date().toLocaleDateString()}</p>
          </div>
          <input type="text" className="search-bar" placeholder="Search for services..." />
          <img className="user-avatar" src="https://via.placeholder.com/40" alt="User" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">{renderContent()}</main>

      {/* Widgets */}
      <aside className="widgets">
        <div className="widget card">
          <h4>Your Vitals</h4>
          <p>Heart Rate: 78 bpm</p>
          <p>Blood Pressure: 120/80</p>
          <p>Weight: 70 kg</p>
        </div>
        <div className="widget card">
          <h4>Medication Schedule</h4>
          <ul>
            <li>Multivitamin - 8:00 AM</li>
            <li>Calcium Tablet - 2:00 PM</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Services;
