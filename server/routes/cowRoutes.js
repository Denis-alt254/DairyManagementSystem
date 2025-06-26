const express = require('express');
const {getCows, createCow, updateCow, deleteCow} = require('../controllers/cowController');
const router = express.Router();

router.get('/api/cows', getCows);
router.post('/api/cows', createCow);
router.put('/api/cows/:tagId', updateCow);
router.delete('/api/cows/:tagId', deleteCow);

module.exports = router;