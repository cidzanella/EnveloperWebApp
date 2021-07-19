
// require the model for user data
let User = require('../../models/user.model');

// CRUD methods

// get all users on mongoDB
const getAllUsers = (req, res, next) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(404).json('Error: ' + err));
};

// get users by username on query 
// req.query vem de parâmetro de consulta no URL como /user?id=12345 e acessa via req.query.id
const getUsersByUsername = async (req, res, next) => {
    let searchUser = {};
    if (req.query.username != null && req.query.username !== ''){
        searchUser.username = new RegExp(req.query.username, 'i');
    };
    await User.find(searchUser)
            .then(users => res.status(200).json(users))
            .catch(err => res.status(404).json('Error: ' + err));
    // try{
    //     const user = await User.find(searchUser);
    //     res.json(user);
    // } catch {
    //     res.json({message: "User not found!"})
    // }
};

// get one user by id on parameter
// req.params é definido na rota (ex: /user/:id) e na chamada /user/123 então acessa com req.params.id
const getOneUserById = async (req, res, next) => {
    User.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(404).json('Error: ' + err));
};

// register new user on mongoDB
const createUser = async (req, res, next) =>{
    // get the user objetct from json request body
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        passcheck: req.body.passcheck,
        isadmin: req.body.isadmin
    });
    await newUser.save()
            .then( user => res.status(201).json('User added: ' + user.id) )
            .catch( err => res.status(400).json('Error:' + err ));
};

// present new user form
const newUser = (req, res, next) => {
    res.json({message: "GET new user - present new user form"});
};

// update
const updateUser = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id)
        .then((user) => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.passcheck = req.body.passcheck;
            user.isadmin = req.body.isadmin;
            
            user.save()
                .then(() => res.status(200).json('User updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(404).json('Error: ' + err));
    res.json({message: "UPDATE user"});
};

// delete
const deleteUser = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('User deleted.'))
        .catch(err => res.status(404).json('Error: ' + err));
};

// export controller methods
module.exports = {getAllUsers, getOneUserById, getUsersByUsername, createUser, newUser, updateUser, deleteUser};