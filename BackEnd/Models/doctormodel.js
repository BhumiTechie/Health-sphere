// BackEnd/Models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    experience: { type: Number, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);