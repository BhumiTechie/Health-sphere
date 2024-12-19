const Doctor = require('../Models/doctormodel');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ success: true, data: doctors });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch doctors', error });
    }
};

// Get Doctor By ID
exports.getDoctorById = async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });

        res.status(200).json({ success: true, data: doctor });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching doctor', error });
    }
};

// Create New Doctor
exports.createDoctor = async (req, res) => {
    const { name, specialty, email, phone, experience } = req.body;

    try {
        const newDoctor = new Doctor({ name, specialty, email, phone, experience });
        await newDoctor.save();

        res.status(201).json({ success: true, message: 'Doctor created successfully', data: newDoctor });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating doctor', error });
    }
};

// Update Doctor Details
exports.updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { name, specialty, email, phone, experience } = req.body;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id, 
            { name, specialty, email, phone, experience },
            { new: true }
        );

        if (!updatedDoctor) return res.status(404).json({ success: false, message: 'Doctor not found' });

        res.status(200).json({ success: true, message: 'Doctor updated successfully', data: updatedDoctor });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating doctor', error });
    }
};

// Delete Doctor
exports.deleteDoctor = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) return res.status(404).json({ success: false, message: 'Doctor not found' });

        res.status(200).json({ success: true, message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting doctor', error });
    }
};