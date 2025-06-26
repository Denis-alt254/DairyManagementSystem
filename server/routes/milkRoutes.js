const express = require('express');
const {getMilk, createMilk} = require('../controllers/milkController')
const router = express.Router();

router.get('/milk', getMilk);
router.post('/milk', createMilk);
router.get('/milk/stats?range=30days', getMilk);

module.exports = router;