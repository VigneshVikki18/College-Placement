const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Route to get job postings
router.get('/job-postings', companyController.getJobPostings);

// Route to review an application
router.put('/applications/:applicationId', companyController.reviewApplication);

// Route to fetch applications related to the company
router.get('/applications', companyController.getApplications);

module.exports = router;