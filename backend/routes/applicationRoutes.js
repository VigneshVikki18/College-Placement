const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const applicationController = require('../controllers/applicationController');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads'); 
        cb(null, uploadPath); // Use the correct upload path
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('application/pdf')) {
            return cb(new Error('Only PDF files are allowed'), false);
        }
        cb(null, true);
    }
});

// Define routes
router.get('/status/:studentId', applicationController.getApplicationStatus);
router.post('/submit', upload.single('resume'), applicationController.submitApplication);
router.put('/update/:applicationId', applicationController.updateApplicationStatus);
router.get('/student/:studentId', applicationController.getApplicationsByStudent);
router.get('/', applicationController.getApplications);
router.get('/interviews', applicationController.getInterviews);

module.exports = router;