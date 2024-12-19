const express = require('express');
const { 
    getAllDoctors, 
    getDoctorById, 
    createDoctor, 
    updateDoctor, 
    deleteDoctor 
} = require('../Controllers/doctorController');
const router = express.Router();

// Routes for Doctors
router.get('/', getAllDoctors);           // Get all doctors
router.get('/:id', getDoctorById);        // Get doctor by ID
router.post('/', createDoctor);           // Add a new doctor
router.put('/:id', updateDoctor);         // Update doctor details
router.delete('/:id', deleteDoctor);      // Delete a doctor

module.exports = router;
