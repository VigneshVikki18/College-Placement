const Interview = require('../models/Interview');

// Function to get all interviews
exports.getInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find();
        res.status(200).json(interviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to schedule a new interview
exports.scheduleInterview = async (req, res) => {
    try {
        const interview = new Interview(req.body);
        await interview.save();
        res.status(201).json(interview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to update an interview
exports.updateInterview = async (req, res) => {
    try {
        const interview = await Interview.findByIdAndUpdate(req.params.interviewId, req.body, { new: true });
        res.status(200).json(interview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};