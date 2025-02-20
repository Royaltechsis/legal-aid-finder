const mongoose = require('mongoose');

const ComplaintsSchema = new mongoose.Schema({
    meaasage: {
        type: String,
        required: false
    },
    complaintStatus: {
        type: Boolean,
        required: false
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    lawyer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Lawyer" 
    },
    
})


const Complaints = mongoose.model('Complaints ', ComplaintsSchema);
module.exports = Complaints ;