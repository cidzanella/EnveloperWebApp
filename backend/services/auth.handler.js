const userHandler = require('./users.handler')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// enable environment variables from .env file
require('dotenv').config();

// login routine
const login = async (username, password, callback) => {
    // get db user data 
    userHandler.getOneUserByUsername(username)
        .then(async userFound => {
            if (! userFound) callback("User not found!", null);
            //check if password matchs
            if (await bcrypt.compare(password, userFound.password)) {
                // create and return JWT - expiration time?
                const accessToken = generateAccessToken(userFound)
                callback(null, accessToken); //should be stored by frontend on localStorage (React)
            } else {
                callback("Password doesn't match!", null);
            }
        })
        .catch(err => callback(err, null));
}

// logout routine
const logout = (req, res) => {
    res.json({msg:'logout em auth.handler'});
}

// verify BEARER TOKEN and return authDate
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401);
    
    //youtube webdev jwt authentication tutorial 13:47
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
        if (err) return res.sendStatus(403);
        req.authData = authData;
        console.log('VerifyToken =========>')
        console.log(authData);
        next();
    })
}

// check Admin privileges
const verifyAdmin = (req, res, next) => {
    verifyToken( req, res, (err, authData) => {
        if (err) return res.sendStatus(401);
        if (!req.authData.isadmin) return res.sendStatus(403);
        next();
    })
}

// generate hash password
const hashPassword = async (password) => {
    return await bcryp.hash(password, 10);
}

// private function to generate Token
function generateAccessToken(user) {
    // generate payload for JWT
    const payload = {
        "id": user._id,
        "username": user.username,
        "isadmin": user.isadmin
    }
    console.log('payload ==============>');
    console.log(payload);
    //create JWT
    return token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = {login, logout, verifyToken, verifyAdmin, hashPassword};