const MilkRecord = require('../models/MilkRecord');

const getMilk = async(req, res) => {
    try {
        const milk = await MilkRecord.find();
        res.json(milk);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createMilk = async(req, res) => {
    try {
        const {cow, date, amountLitres} = req.body;
        const milk = new MilkRecord({cow, date, amountLitres});
        await milk.save();
        res.status(201).json(milk);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

module.exports = {getMilk, createMilk};