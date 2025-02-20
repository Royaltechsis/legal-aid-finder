const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: [true, "phone number is require"]
    },
    role: { 
        type: String, 
        enum: ["User", "Lawyer", "Admin"], 
        default: "User" 
    },
    profile: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Request Legal aid
const legalCaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    caseType: {
        type: String,
        required: true,
    },
    urgency: {
        type: String,
        enum: ["Emergency", "Not Urgent"],
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema, 'LegalCase', legalCaseSchema);
