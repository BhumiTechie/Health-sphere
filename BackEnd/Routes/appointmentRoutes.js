const express = require('express');
const router = express.Router();
const appointmentController = require('../Controllers/appointController');

router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/user/:userId', appointmentController.getAppointmentsByUser);
router.get('/appointments/doctor/:doctorId', appointmentController.getAppointmentsByDoctor);
router.put('/appointments/:id/status', appointmentController.updateAppointmentStatus);
router.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = router;
 