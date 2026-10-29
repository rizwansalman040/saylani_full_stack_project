// /backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Connect to Database
connectDB();

const app = express();

// Middleware to parse JSON and allow cross-origin requests from your frontend
app.use(express.json());
app.use(cors());

// Basic test route
app.get('/', (req, res) => {
    res.send('API is running live...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});