const express = require('express');
const {getUsers, createUser} = require('../controllers/authController');
const router = express.Router();

router.get('/auth/me', getUsers);
router.post('/auth/login', getUsers);
router.post('/auth/register', createUser);

module.exports = router;