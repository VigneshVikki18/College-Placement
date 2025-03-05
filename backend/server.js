const express = require('express');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();


const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});