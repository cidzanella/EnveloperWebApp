const express = require('express');

const router = express.Router();

const userController = require('../controllers/users.controller');

router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getOneUserById); //???
router.get('/api/users/new', userController.newUser); //presents new user form: should it pass an empty object to be populated by form?
router.post('/api/users/add', userController.createUser); //register user 
router.delete('/api/users/:id', userController.deleteUser);
router.put('/api/users/:id', userController.updateUser); //??? put

module.exports = router; //export to use in server.js