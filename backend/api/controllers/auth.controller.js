// require user model to get users data
let userHandler = require('../../services/users.handler');

// get user and pass from DB

// ???
// login
const processLogin = (req, res, next) => {
    // get user and pass from the httpRequest body
    const {username, password} = req.body;
    // validate user and pass inputs
    
    // get user from userHandler and check pass
    userHandler.getUsersByUsername

}

// logout
processLogout