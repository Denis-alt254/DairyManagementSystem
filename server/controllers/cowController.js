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

module.exports = {getCows, createCow};