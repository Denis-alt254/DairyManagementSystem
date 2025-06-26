const Expense = require('../models/Expense');

const getExpenses = async(req, res) => {
    try {
        const expense = await Expense.find();
        res.json(expense);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createExpense = async(req, res) => {
    try {
        const {type, amount, description, date, category, addedBy} = req.body;
        const expense = new Expense({type, amount, description, date, category, addedBy});
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const getSummary = async (req, res) => {
    try {
        const sammary = await Expense.find();
        res.json(sammary);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getExpenses, createExpense, getSummary};