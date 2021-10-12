// require the service for accessing users data 
let userHandler = require('../../services/users.handler');

const getAllUsers = (req, res) => {
    //??? eu acredito que deva desmembrar o httpRequest e passar como parametro para o service
    //e receber um retorno do service e montar na httpResponse
    userHandler.getAllUsers(req, res);
};

// get one user by id on parameter
// req.params é definido na rota (ex: /user/:id) e na chamada /user/123 então acessa com req.params.id
const getOneUserById = async (req, res) => {
    // validate id on httpRequest
    if (req.params.id) {
        try {
            var userFound = await userHandler.getOneUserById(req.params.id);
            return res.status(200).json(userFound);
        } catch (err) {
            return res.status(404).json('Error: ' + err)
        }
    }
    return res.status(400).json('Error: User ID must be informed.');
};

const createUser = async (req, res) =>{
    res = await userHandler.createUser(req.body, (err, userId) => {
        if (err) res.status(400).json('Error: ' + err);
        res.status(200).json({userId});
    });
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