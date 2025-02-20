const mongoose = require('mongoose');


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
        required: false,
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
const Lawyers = mongoose.model('Lawyers', LawyerSchema);
module.exports = Lawyers;
