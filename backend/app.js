const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicationRoutes = require('./routes/applicationRoutes');
const companyRoutes = require('./routes/companyRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const placementDriveRoutes = require('./routes/placementDriveRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./utils/db');

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/placement-drives', placementDriveRoutes);
app.use('/api/auth', authRoutes);

// Database connection
connectDB();

module.exports = app;