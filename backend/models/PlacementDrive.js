const mongoose = require('mongoose');

const placementDriveSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participatingCompanies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }],
    studentParticipation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }],
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        default: 'Scheduled'
    },
    feedback: {
        type: String,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('PlacementDrive', placementDriveSchema);