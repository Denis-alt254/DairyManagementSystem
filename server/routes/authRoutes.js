const express = require('express');
const {getUsers, createUser} = require('../controllers/authController');
const router = express.Router();

router.get('/api/auth/me', getUsers);
router.post('/api/auth/login', getUsers);
router.post('/api/auth/register', createUser);

module.exports = router;