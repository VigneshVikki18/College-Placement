const Application = require('../models/Application');
const path = require('path');
const mongoose = require('mongoose');

// Function to submit a new application
exports.submitApplication = async (req, res) => {
    try {
        console.log("Received request:", req.body);
        console.log("Uploaded file:", req.file);
        

        if (!req.file) {
            return res.status(400).json({ message: "Resume file is required" });
        }

        const { studentId, name, email, coverLetter } = req.body;
        //const resume = req.file.path;

        if (!studentId || !name || !email || !coverLetter) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Ensure studentId is a valid ObjectId
        // if (!mongoose.Types.ObjectId.isValid(studentId)) {
        //     return res.status(400).json({ message: "Invalid student ID" });
        // }

        const application = new Application({ studentId, name, email, resume, coverLetter });

        await application.save();
        res.status(201).json(application);
    } catch (error) {
        console.error("Error submitting application:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Function to get application status by student ID
exports.getApplicationStatus = async (req, res) => {
    try {
        const application = await Application.findOne({ studentId: req.params.studentId });
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to update application status
exports.updateApplicationStatus = async (req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(req.params.applicationId, req.body, { new: true });
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get all applications for a specific student
exports.getApplicationsByStudent = async (req, res) => {
    try {
        const applications = await Application.find({ studentId: req.params.studentId });
        res.status(200).json(applications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get all applications
exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get all interviews
exports.getInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find();
        res.status(200).json(interviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};