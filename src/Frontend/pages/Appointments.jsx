import React from 'react';

const Appointments = () => {
  return (
    <div className="main-content">
      <h2>Appointments</h2>
      <p>Manage your appointments here:</p>
      <table>
        <thead>
          <tr>
            <th>Specialist</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cardiologist</td>
            <td>12-Dec-2024</td>
            <td>10:00 AM</td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <td>Dermatologist</td>
            <td>15-Dec-2024</td>
            <td>11:30 AM</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
