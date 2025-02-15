const mongoose = require('mongoose');

// Define User Schema
const LawyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    niche:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: false,
    },
    profilepic:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and Export Model
const Lawyer = mongoose.model('Lawyer', LawyerSchema);
module.exports = Lawyer;
