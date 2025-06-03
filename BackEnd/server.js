require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const { connect } = require('./db/index');
const userRoute = require('./Routes/userRoute');
const appointmentRoutes = require('./Routes/appointmentRoutes');
const doctorRoutes = require('./Routes/doctorRoutes');
const recordRoutes = require('./Routes/recordRoutes');

const PORT = process.env.PORT || 5000;

// Connect to the database
connect();

const app = express();

// ✅ Enable CORS
app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    credentials: true               // If you are using cookies/auth headers
}));

app.use(express.json()); // Middleware to parse JSON

// Routes
app.use('/user', userRoute);
app.use('/appointments', appointmentRoutes);
app.use('/records', recordRoutes);
app.use('/doctors', doctorRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
