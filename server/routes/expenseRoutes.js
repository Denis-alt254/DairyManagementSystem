const express = require('express');
const {getExpenses, createExpense, getSummary} = require('../controllers/expenseController');
const router = express.Router();

router.get('/api/expenses', getExpenses);
router.get('/api/expenses/summary', getSummary);
router.post('/api/expenses', createExpense);

module.exports = router;