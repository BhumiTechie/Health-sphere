const Appointment = require('../Models/appointmentmodel');

// Create appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const saved = await appointment.save();
    res.json({ success: true, message: 'Appointment created', data: saved });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error creating appointment', error: err });
  }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('userId', 'name email')
      .populate('doctorId', 'name specialty');
    res.json({ success: true, data: appointments });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching appointments', error: err });
  }
};

// Get appointments by user
exports.getAppointmentsByUser = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId })
      .populate('doctorId', 'name specialty');
    res.json({ success: true, data: appointments });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching user appointments', error: err });
  }
};

// Get appointments by doctor
exports.getAppointmentsByDoctor = async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.params.doctorId })
      .populate('userId', 'name email');
    res.json({ success: true, data: appointments });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching doctor appointments', error: err });
  }
};

// Update status
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: 'Appointment not found' });
    res.json({ success: true, message: 'Status updated', data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error updating status', error: err });
  }
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Appointment not found' });
    res.json({ success: true, message: 'Appointment deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error deleting appointment', error: err });
  }
};
