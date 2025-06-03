// import React, { useState } from "react";
// import "./Services.css";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaUserMd,
//   FaFileInvoice,
// } from "react-icons/fa";

// const Services = () => {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [expandedDoctor, setExpandedDoctor] = useState(null);

//   const appointments = [
//     {
//       date: "2024-12-10",
//       doctor: "Dr. Sarah Lee",
//       specialty: "Dermatologist",
//       status: "Confirmed",
//     },
//     {
//       date: "2024-12-15",
//       doctor: "Dr. John Josi",
//       specialty: "Orthopedic",
//       status: "Pending",
//     },
//   ];

//   const filteredAppointments =
//     statusFilter === "All"
//       ? appointments
//       : appointments.filter((a) => a.status === statusFilter);

//   const doctors = [
//     {
//       name: "Dr. Sarah Lee",
//       specialty: "Dermatologist",
//       bio: "10+ years experience. Expert in skin care and allergies.",
//     },
//     {
//       name: "Dr. John Doe",
//       specialty: "Orthopedic",
//       bio: "Specializes in bone health and physical therapy.",
//     },
//   ];

//   const billingData = [
//     {
//       id: "#1001",
//       date: "2024-12-01",
//       amount: "250 Rs",
//       status: "Paid",
//     },
//     {
//       id: "#1002",
//       date: "2024-12-03",
//       amount: "500 Rs",
//       status: "Pending",
//     },
//   ];

//   const renderContent = () => {
//     switch (activePage) {
//       case "dashboard":
//   return (
//     <div className="dashboard-content">
//       <h1>Welcome, Mahak 👋</h1>
//       <div className="overview-section">
//         <div className="overview-card">
//           <h4>Your Appointments</h4>
//           <p>You have 2 upcoming appointments</p>
//         </div>
//         <div className="overview-card">
//           <h4>Your Doctors</h4>
//           <p>2 Specialists Available</p>
//         </div>
//         <div className="overview-card">
//           <h4>Billing Overview</h4>
//           <p>Total Billed: 750 Rs</p>
//         </div>
//       </div>

//       {/* <div className="dashboard-section">
//         <h2>Your Recent Health Activity</h2>
//         <ul>
//           <li>Visited Dr. Smith (Cardiologist) on 2024-11-28</li>
//           <li>Prescription updated: Blood Pressure Medication</li>
//           <li>Paid 250 Rs for skin consultation</li>
//         </ul>

//         <h2>Your Health Summary</h2>
//         <div className="patient-stats">
//           <div className="stat-box">
//             <h5>Heart Rate</h5>
//             <p>72 bpm</p>
//           </div>
//           <div className="stat-box">
//             <h5>Blood Pressure</h5>
//             <p>120/80 mmHg</p>
//           </div>
//           <div className="stat-box">
//             <h5>Weight</h5>
//             <p>58 kg</p>
//           </div>
//         </div>

//         <div className="placeholder-chart">📊 Health Progress Chart (Coming Soon)</div>
//       </div> */}
//     </div>
//   );


//       case "appointments":
//         return (
//           <div className="appointments-content">
//             <h1>Appointments</h1>
//             <label>
//               Filter by Status:{" "}
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//               >
//                 <option value="All">All</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Confirmed">Confirmed</option>
//               </select>
//             </label>
//             <table className="appointments-table">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Doctor</th>
//                   <th>Specialty</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredAppointments.map((appt, index) => (
//                   <tr key={index}>
//                     <td>{appt.date}</td>
//                     <td>{appt.doctor}</td>
//                     <td>{appt.specialty}</td>
//                     <td>{appt.status}</td>
//                     <td>
//                       <button className="btn">
//                         {appt.status === "Pending" ? "Confirm" : "Cancel"}
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );

//       case "doctors":
//         return (
//           <div className="doctors-content">
//             <h1>Doctors</h1>
//             <div className="doctor-list">
//               {doctors.map((doc, index) => (
//                 <div key={index} className="doctor-card">
//                   <h4>{doc.name}</h4>
//                   <p>{doc.specialty}</p>
//                   <button
//                     className="btn"
//                     onClick={() =>
//                       setExpandedDoctor(
//                         expandedDoctor === index ? null : index
//                       )
//                     }
//                   >
//                     {expandedDoctor === index ? "Hide Profile" : "View Profile"}
//                   </button>
//                   {expandedDoctor === index && (
//                     <p className="doctor-bio">{doc.bio}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         );

//       case "billing":
//         return (
//           <div className="billing-content">
//             <h1>Payment Status</h1>
//             <table className="appointments-table">
//               <thead>
//                 <tr>
//                   <th>Patient ID</th>
//                   <th>Date</th>
//                   <th>Amount</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {billingData.map((bill, index) => (
//                   <tr key={index}>
//                     <td>{bill.id}</td>
//                     <td>{bill.date}</td>
//                     <td>{bill.amount}</td>
//                     <td>
//                       <span
//                         className={`status-badge ${
//                           bill.status === "Paid" ? "paid" : "pending"
//                         }`}
//                       >
//                         {bill.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );

//       default:
//         return <p>Select a page to display its content.</p>;
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <h2 className="brand-title">Health Sphere</h2>
//         <ul className="sidebar-menu">
//           <li
//             className={activePage === "dashboard" ? "active" : ""}
//             onClick={() => setActivePage("dashboard")}
//           >
//             <FaHome className="menu-icon" /> Dashboard
//           </li>
//           <li
//             className={activePage === "appointments" ? "active" : ""}
//             onClick={() => setActivePage("appointments")}
//           >
//             <FaCalendarAlt className="menu-icon" /> Appointments
//           </li>
//           <li
//             className={activePage === "doctors" ? "active" : ""}
//             onClick={() => setActivePage("doctors")}
//           >
//             <FaUserMd className="menu-icon" /> Doctors
//           </li>
//           <li
//             className={activePage === "billing" ? "active" : ""}
//             onClick={() => setActivePage("billing")}
//           >
//             <FaFileInvoice className="menu-icon" /> Payment Status
//           </li>
//         </ul>
//       </aside>
//       <main className="main-content">{renderContent()}</main>
//     </div>
//   );
// };

// export default Services;


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
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedDoctor, setExpandedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([
    {
      date: "2024-12-10",
      doctor: "Dr. Sarah Lee",
      specialty: "Dermatologist",
      status: "Confirmed",
    },
    {
      date: "2024-12-15",
      doctor: "Dr. John Josi",
      specialty: "Orthopedic",
      status: "Pending",
    },
  ]);

  const filteredAppointments =
    statusFilter === "All"
      ? appointments
      : appointments.filter((a) => a.status === statusFilter);

  const doctors = [
    {
      name: "Dr. Sarah Lee",
      specialty: "Dermatologist",
      bio: "10+ years experience. Expert in skin care and allergies.",
      availability: "Mon, Wed, Fri - 10 AM to 1 PM",
    },
    {
      name: "Dr. John Doe",
      specialty: "Orthopedic",
      bio: "Specializes in bone health and physical therapy.",
      availability: "Tue, Thu - 11 AM to 3 PM",
    },
    {
      name: "Dr. Anita Sharma",
      specialty: "Cardiologist",
      bio: "Heart specialist with 15+ years of experience in cardiac care.",
      availability: "Mon to Fri - 9 AM to 12 PM",
    },
    {
      name: "Dr. Karan Mehta",
      specialty: "Neurologist",
      bio: "Expert in nervous system disorders with international certifications.",
      availability: "Weekends - 10 AM to 2 PM",
    },
  ];

  const billingData = [
    {
      id: "#1001",
      date: "2024-12-01",
      amount: "250 Rs",
      status: "Paid",
    },
    {
      id: "#1002",
      date: "2024-12-03",
      amount: "500 Rs",
      status: "Pending",
    },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div className="dashboard-content">
            <h1>Welcome, Mahak 👋</h1>
            <div className="overview-section">
              <div className="overview-card">
                <h4>Your Appointments</h4>
                <p>You have {appointments.length} upcoming appointments</p>
              </div>
              <div className="overview-card">
                <h4>Your Doctors</h4>
                <p>{doctors.length} Specialists Available</p>
              </div>
              <div className="overview-card">
                <h4>Billing Overview</h4>
                <p>Total Billed: 750 Rs</p>
              </div>
            </div>
          </div>
        );

      case "appointments":
        return (
          <div className="appointments-content">
            <h1>Appointments</h1>
            <label>
              Filter by Status:{" "}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
              </select>
            </label>
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
                {filteredAppointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.date}</td>
                    <td>{appt.doctor}</td>
                    <td>{appt.specialty}</td>
                    <td>{appt.status}</td>
                    <td>
                      <button className="btn">
                        {appt.status === "Pending" ? "Confirm" : "Cancel"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "doctors":
        return (
          <div className="doctors-content">
            <h1>Doctors</h1>
            <div className="doctor-list">
              {doctors.map((doc, index) => (
                <div key={index} className="doctor-card">
                  <h4>{doc.name}</h4>
                  <p>{doc.specialty}</p>
                  <button
                    className="btn"
                    onClick={() =>
                      setExpandedDoctor(expandedDoctor === index ? null : index)
                    }
                  >
                    {expandedDoctor === index ? "Hide Profile" : "View Profile"}
                  </button>
                  {expandedDoctor === index && (
                    <>
                      <p className="doctor-bio">{doc.bio}</p>
                      <p className="doctor-availability">
                        <strong>Availability:</strong> {doc.availability}
                      </p>
                      <button className="btn-secondary">Book Appointment</button>
                      <button className="btn-secondary">View Reviews</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "billing":
        return (
          <div className="billing-content">
            <h1>Payment Status</h1>
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
                {billingData.map((bill, index) => (
                  <tr key={index}>
                    <td>{bill.id}</td>
                    <td>{bill.date}</td>
                    <td>{bill.amount}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          bill.status === "Paid" ? "paid" : "pending"
                        }`}
                      >
                        {bill.status}
                      </span>
                    </td>
                  </tr>
                ))}
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
            <FaFileInvoice className="menu-icon" /> Payment Status
          </li>
        </ul>
      </aside>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default Services;
