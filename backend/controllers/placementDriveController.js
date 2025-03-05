const PlacementDrive = require('../models/PlacementDrive');

// Function to create a new placement drive
exports.createPlacementDrive = async (req, res) => {
    try {
        const placementDrive = new PlacementDrive(req.body);
        await placementDrive.save();
        res.status(201).json(placementDrive);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get all placement drives
exports.getAllPlacementDrives = async (req, res) => {
    try {
        const placementDrives = await PlacementDrive.find();
        res.status(200).json(placementDrives);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get a specific placement drive by ID
exports.getPlacementDriveById = async (req, res) => {
    try {
        const placementDrive = await PlacementDrive.findById(req.params.id);
        res.status(200).json(placementDrive);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to update a placement drive by ID
exports.updatePlacementDrive = async (req, res) => {
    try {
        const placementDrive = await PlacementDrive.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(placementDrive);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to delete a placement drive by ID
exports.deletePlacementDrive = async (req, res) => {
    try {
        await PlacementDrive.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Placement drive deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get reports on placement drives
exports.getPlacementDriveReports = async (req, res) => {
    try {
        // Implement logic to generate reports
        res.status(200).json({ message: 'Reports generated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};