const mongoose = require('mongoose');

const ComplaintsSchema = new mongoose.Schema({
    complaints: {
        type: String,
        required: false
    },
    complaintStatus: {
        type: Boolean,
        required: false
    },
    
})


const Complaints = mongoose.model('Complaints ', ComplaintsSchema);
module.exports = Complaints ;