const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
