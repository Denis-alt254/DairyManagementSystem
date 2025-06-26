const Task = require('../models/Task');

const getTasks = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createTask = async(req, res) => {
    try {
        const {title, description, assignedTo, dueDate, status} = req.body;
        const task = new Task({title, description, assignedTo, dueDate, status});
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

module.exports = {getTasks, createTask};