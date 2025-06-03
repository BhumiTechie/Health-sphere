const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    phone: { type: String, required: true },
    experience: { type: Number, required: true, min: 0 },
    isActive: { type: Boolean, default: true }
});


module.exports = mongoose.model('Doctor', doctorSchema);
