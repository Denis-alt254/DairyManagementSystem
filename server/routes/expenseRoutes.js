const express = require('express');
const {getExpenses, createExpense, getSummary} = require('../controllers/expenseController');
const router = express.Router();

router.get('/expenses', getExpenses);
router.get('/expenses/summary', getSummary);
router.post('/expenses', createExpense);

module.exports = router;