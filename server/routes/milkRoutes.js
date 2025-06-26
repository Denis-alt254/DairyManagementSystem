const express = require('express');
const {getMilk, createMilk} = require('../controllers/milkController')
const router = express.Router();

router.get('/api/milk', getMilk);
router.post('/api/milk', createMilk);
router.get('/api/milk', getMilk);

module.exports = router;