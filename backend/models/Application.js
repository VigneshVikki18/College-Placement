const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    coverLetter: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['submitted', 'reviewed', 'shortlisted', 'rejected', 'accepted'],
        default: 'submitted',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;