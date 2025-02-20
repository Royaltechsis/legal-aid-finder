const mongoose = require('mongoose');

const CasesSchema = new mongoose.Schema({
    caseName: {
        type: String,
        required: true
    },
    caseCategory: {
        type: String,
        required: true
    },
    caseDescription: {
        type: String,
        required: true
    },
    caseStatus: {
        type: Boolean,
        default: false
    },
    caseDate: {
        type: Date,
        default: Date.now
    }
})



const Cases = mongoose.model('Cases', CasesSchema);
module.exports = Cases;