import React from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="content">
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard page. Here you can view analytics and manage your account.</p>
      </div>
    </div>
  );
};

export default Dashboard;
