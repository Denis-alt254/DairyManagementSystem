const express = require('express');
const {getCows, createCow, updateCow, deleteCow} = require('../controllers/cowController');
const router = express.Router();

router.get('/cows', getCows);
router.post('/cows', createCow);
router.put('/cows/:tagId', updateCow);
router.delete('/cows/:tagId', deleteCow);

module.exports = router;