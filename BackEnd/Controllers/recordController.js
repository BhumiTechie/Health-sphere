const Record = require('../Models/recordmodel');
const User = require('../Models/usermodel');
const Doctor = require('../Controllers/doctorController');

// Get All Records
exports.getAllRecords = async (req, res) => {
    try {
        const records = await Record.find()
            .populate('patientId', 'username email') 
            .populate('doctorId', 'name specialty'); 

        res.status(200).json({ success: true, data: records });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch records', error });
    }
};

// Get Record By ID
exports.getRecordById = async (req, res) => {
    const { id } = req.params;

    try {
        const record = await Record.findById(id)
            .populate('patientId', 'username email')
            .populate('doctorId', 'name specialty');

        if (!record) return res.status(404).json({ success: false, message: 'Record not found' });

        res.status(200).json({ success: true, data: record });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching record', error });
    }
};

// Create New Record
exports.createRecord = async (req, res) => {
    const { patientId, doctorId, diagnosis, medications, notes } = req.body;

    try {
        // Validate patient and doctor IDs
        const patient = await User.findById(patientId);
        const doctor = await Doctor.findById(doctorId);

        if (!patient) return res.status(404).json({ success: false, message: 'Patient not found' });
        if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });

        const newRecord = new Record({ patientId, doctorId, diagnosis, medications, notes });
        await newRecord.save();

        res.status(201).json({ success: true, message: 'Record created successfully', data: newRecord });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating record', error });
    }
};

// Update Record
exports.updateRecord = async (req, res) => {
    const { id } = req.params;
    const { diagnosis, medications, notes } = req.body;

    try {
        const updatedRecord = await Record.findByIdAndUpdate(
            id, 
            { diagnosis, medications, notes },
            { new: true }
        );

        if (!updatedRecord) return res.status(404).json({ success: false, message: 'Record not found' });

        res.status(200).json({ success: true, message: 'Record updated successfully', data: updatedRecord });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating record', error });
    }
};

// Delete Record
exports.deleteRecord = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRecord = await Record.findByIdAndDelete(id);
        if (!deletedRecord) return res.status(404).json({ success: false, message: 'Record not found' });

        res.status(200).json({ success: true, message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting record', error });
    }
};
