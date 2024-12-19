const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    email :{
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    password :{
        type: String, 
        require: true,
        minlength :6
    },
    role: { type: String, enum: ['user', 'doctor'], default: 'user' }})
    

const User = mongoose.model('User', userSchema);

module.exports = User;