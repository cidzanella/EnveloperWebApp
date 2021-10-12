const express = require('express');
const router = express.Router(); //router do express
const authController = require('../controllers/auth.controller');

router.post('/api/auth/login', authController.processLogin);

router.post('/api/auth/logout', authController.processLogout)

module.exports = router;
