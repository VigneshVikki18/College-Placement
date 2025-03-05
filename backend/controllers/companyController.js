const JobPosting = require('../models/JobPosting');
const Application = require('../models/Application');

// Function to get job postings
exports.getJobPostings = async (req, res) => {
    try {
        const jobPostings = await JobPosting.find();
        res.status(200).json(jobPostings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to review an application
exports.reviewApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(req.params.applicationId, req.body, { new: true });
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to fetch applications related to the company
exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};