const express = require('express');
const {getMilk, createMilk} = require('../controllers/milkController')
const router = express.Router();

router.get('/api/milk', getMilk);
router.post('/api/milk', createMilk);
router.get('/api/milk/stats?range=30days', getMilk);

module.exports = router;