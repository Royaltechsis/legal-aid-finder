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

module.exports = mongoose.model( 'LegalCase', legalCaseSchema);
