const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // Add other fields as needed
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;