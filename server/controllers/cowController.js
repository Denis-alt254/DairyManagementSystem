const Cow = require('../models/Cow');

const getCows = async(req, res) =>{
    try {
        const cows = await Cow.find();
        res.json(cows);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createCow = async(req, res) =>{
    try {
        const {tagId, breed, age, healthStatus, averageMilk, addedBy} = req.body;
        const cow = new Cow({tagId, breed, age, healthStatus, averageMilk, addedBy});
        await cow.save();
        res.status(201).json(cow)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updateCow = async(req, res) => {
    try {
        const cow = await Cow.find(c => c.tagId === parseInt(req.params.tagId));
        Object.assign(cow, req.body);
        res.json(cow);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

const deleteCow = async (req, res) => {
    try {
        const cow = await Cow.filter(c => c.tagId !== parseInt(req.params.tagId));
        res.status(204).json();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

module.exports = {getCows, createCow, updateCow, deleteCow};