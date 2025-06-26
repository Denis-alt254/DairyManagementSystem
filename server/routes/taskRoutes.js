const express = require('express');
const {getTasks, createTask, updateTask, deleteTask} = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:title', updateTask);
router.delete('/tasks/:title', deleteTask);

module.exports = router;