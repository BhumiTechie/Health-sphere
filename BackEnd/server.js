require('dotenv').config();
const express = require('express');
const { connect } = require('./db/index');
const userRoute = require('./Routes/userRoute');
const appointmentRoutes = require('./Routes/appointmentRoutes');
const doctorRoutes = require('./Routes/doctorRoutes');
const recordRoutes = require('./Routes/recordRoutes');



const PORT = process.env.PORT || 3000;

// Connect to the database
connect();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use('/user', userRoute);
app.use('/appointments', appointmentRoutes);
app.use('/records', recordRoutes); // Removed duplicate
app.use('/doctors', doctorRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});