const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
   
    format: {
        type: String,
        enum: ['in-person', 'virtual'],
        required: true
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'canceled'],
        default: 'scheduled'
    },
    feedback: {
        type: String,
        default: ''
    },
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;