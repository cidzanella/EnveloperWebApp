const express = require('express');

const router = express.Router();

const userController = require('../controllers/users.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUserById); //???
router.get('/new', userController.newUser); //presents new user form
router.post('/add', userController.createUser); //register user 
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser); //??? put

module.exports = router; //export to use in server.js