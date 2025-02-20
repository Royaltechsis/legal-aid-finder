const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    complaints: {
        type: String,
        required: false
    },
    complaintStatus: {
        type: Boolean,
        required: false
    },
    
})