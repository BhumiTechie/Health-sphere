import React from "react";
import "./Doctors.css";

const doctorsList = [
  {
    name: "Dr. Ayesha Khan",
    specialization: "Dermatologist",
    available: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Arjun Mehta",
    specialization: "Cardiologist",
    available: false,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Dr. Neha Sharma",
    specialization: "Neurologist",
    available: true,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Doctors = () => {
  return (
    <div className="doctors-container">
      <h2 className="doctors-heading">Available Doctors</h2>
      <div className="doctors-grid">
        {doctorsList.map((doc, index) => (
          <div key={index} className="doctor-card">
            <img src={doc.image} alt={doc.name} className="doctor-img" />
            <h3 className="doctor-name">{doc.name}</h3>
            <p className="doctor-specialization">{doc.specialization}</p>
            <p className={`doctor-status ${doc.available ? "available" : "unavailable"}`}>
              {doc.available ? "Available Now" : "Unavailable"}
            </p>
            <button
              disabled={!doc.available}
              className={`consult-button ${doc.available ? "available" : "unavailable"}`}
            >
              {doc.available ? "Consult Now" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
