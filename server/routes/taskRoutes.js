const express = require('express');
const {getTasks, createTask, updateTask, deleteTask} = require('../controllers/taskController');
const router = express.Router();

router.get('/api/tasks', getTasks);
router.post('/api/tasks', createTask);
router.put('/api/tasks/:title', updateTask);
router.delete('/api/tasks/:title', deleteTask);

module.exports = router;