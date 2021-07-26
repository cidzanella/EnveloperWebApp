// require the service for accessing users data 
let userHandler = require('../../services/users.handler');

const getAllUsers = (req, res) => {
    userHandler.getAllUsers(req, res);
};

// get one user by id on parameter
// req.params é definido na rota (ex: /user/:id) e na chamada /user/123 então acessa com req.params.id
const getOneUserById = async (req, res) => {
    userHandler.getOneUserById(req, res);
};

const createUser = async (req, res) =>{
    await userHandler.createUser(req, res);
};

// present new user form
const newUser = (req, res) => {
    res.json({message: "GET new user - present new user form"});
};

// update
const updateUser = (req, res) => {
    userHandler.updateUser(req, res);
};

// delete
const deleteUser = (req, res) => {
    userHandler.deleteUser(req, res);
};

// export controller methods
module.exports = {getAllUsers, getOneUserById, createUser, newUser, updateUser, deleteUser};