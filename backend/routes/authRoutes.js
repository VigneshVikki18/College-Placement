const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Route to handle user registration
router.post('/register', authController.register);

// Route to handle user login
router.post('/login', authController.login);

// Define the route to get the user data
router.get('/user', authMiddleware, authController.getUser);

module.exports = router;