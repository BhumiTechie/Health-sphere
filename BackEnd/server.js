require('dotenv').config();
const express = require('express');
const { connect } = require('./db/index');
const userRoute = require('./Routes/userRoute');
const appointmentRoutes = require('./Routes/appointmentRoutes');
const doctorRoutes = require('./Routes/doctorRoutes');



const PORT = process.env.PORT || 3000;

connect();


const app = express();
app.use(express.json());


// Routes
app.use('/user', userRoute);
app.use('/appointments', appointmentRoutes);
app.use('/records', recordRoutes);
app.use('/doctors', doctorRoutes);




app.listen(3000, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})