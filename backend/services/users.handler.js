// handle interaction with data access layer for user.model

// require the model for user data
let User = require('../models/user.model');

// require bcrypt for password security
const bcrypt = require('bcrypt');

// CRUD methods

// get all users on mongoDB
const getAllUsers = (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(404).json('Error: ' + err));
};

// get users by username on query 
// req.query vem de parâmetro de consulta no URL como /user?id=12345 e acessa via req.query.id
const getUsersByUsername = async (req, res) => {
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
const getOneUserById = async (id) => {
    try{
        let user = await User.findById(id);
        return user;
    }catch (e){
        throw Error('Error fetching user: ' + e);
    }
};

// ???? como receber parametro e devolver um usuario do bd
const getOneUserByUsername = async (username) => {
//     User.findOne({username}, (err, userFound) => {
//         if (err) throw err;
//         console.log("getOne :: " + username);
//         console.log(userFound);
//         return userFound;
//     })

    return User.findOne({username})
        .then(userFound => {return(userFound)})
        .catch(err => {throw err});
}

// register new user on mongoDB
const createUser = async (userData, callback) =>{
    // get the user objetct from json request body
    const newUser = new User({
        username: userData.username,
        password:  await bcrypt.hash(userData.password, 10),
        passcheck: userData.passcheck,
        isadmin: userData.isadmin
    });
    await newUser.save()
            .then( user => callback(null, user.id) )
            .catch( err => callback(err, null) );
};

// present new user form
const newUser = (req, res) => {
    res.json({message: "GET new user - present new user form"});
};

// update
const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id)
        .then(async (user) => {
            user.username = req.body.username;
            user.password = await bcrypt.hash(req.body.password, 10),
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
const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('User deleted.'))
        .catch(err => res.status(404).json('Error: ' + err));
};

// export controller methods
module.exports = {getAllUsers, getOneUserById, getOneUserByUsername, getUsersByUsername, createUser, newUser, updateUser, deleteUser};