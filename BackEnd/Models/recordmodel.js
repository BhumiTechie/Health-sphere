const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    patientId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    doctorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Doctor', 
        required: true 
    },
    diagnosis: { 
        type: String, 
        required: true 
    },
    medications: { 
        type: [String], 
        required: true 
    },
    notes: { 
        type: String 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
}, {
    timestamps: true 
});

module.exports = mongoose.model('Record', recordSchema);
