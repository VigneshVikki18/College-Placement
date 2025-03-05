const express = require('express');
const router = express.Router();
const placementDriveController = require('../controllers/placementDriveController');

// Route to create a new placement drive
router.post('/', placementDriveController.createPlacementDrive);

// Route to get all placement drives
router.get('/', placementDriveController.getAllPlacementDrives);

// Route to get a specific placement drive by ID
router.get('/:id', placementDriveController.getPlacementDriveById);

// Route to update a placement drive by ID
router.put('/:id', placementDriveController.updatePlacementDrive);

// Route to delete a placement drive by ID
router.delete('/:id', placementDriveController.deletePlacementDrive);

// Route to get reports on placement drives
router.get('/reports', placementDriveController.getPlacementDriveReports);

module.exports = router;