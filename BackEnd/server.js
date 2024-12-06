require('dotenv').config();
const express = require('express');
const { connect } = require('./db/index');


const PORT = process.env.PORT || 3000;

connect();


const app = express();


app.listen(3000, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})