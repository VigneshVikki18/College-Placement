const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    jobListings: [{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        requirements: {
            type: String,
            required: true,
        },
        datePosted: {
            type: Date,
            default: Date.now,
        },
    }],
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);