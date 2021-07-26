// require user model to get users data
let User = require('../../models/user.model');

// get user and pass from DB

// login
const processLogin = (req, res, next) => {
    User.find(req.username)
        .then(user)
}

// logout
processLogout