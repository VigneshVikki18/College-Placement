const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

// Define routes
router.get('/', interviewController.getInterviews);
router.post('/schedule', interviewController.scheduleInterview);
router.put('/update/:interviewId', interviewController.updateInterview);

module.exports = router;