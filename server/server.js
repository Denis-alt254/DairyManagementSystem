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
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cows', require('./routes/cowRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));
app.use('/api/milk', require('./routes/milkRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(process.env.PORT || PORT, (req, res) =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});