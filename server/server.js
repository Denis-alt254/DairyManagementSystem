const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();
PORT = 5000;

app.listen(process.env.PORT || PORT, (req, res) =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});