const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const auth = require('../../services/auth.handler');

router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getOneUserById); //???
router.post('/api/users/add', auth.verifyAdmin, userController.createUser); //register user 
router.delete('/api/users/:id', auth.verifyAdmin, userController.deleteUser);
router.put('/api/users/:id', auth.verifyAdmin, userController.updateUser); //??? put

module.exports = router; //export to use in server.js