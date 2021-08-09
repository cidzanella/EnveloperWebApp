const userHandler = require('./users.handler')

const login = (req, res) => {
    userHandler.getUsersByUsername(req, res)
        .then(user => user)
}

const logout = (req, res) => {

}