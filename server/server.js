const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
connectDB();
app.use(express.json());
PORT = 5000;

//Routes
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/cowRoutes'));
app.use('/', require('./routes/expenseRoutes'));
app.use('/', require('./routes/milkRoutes'));
app.use('/', require('./routes/taskRoutes'));

app.listen(process.env.PORT || PORT, (req, res) =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});