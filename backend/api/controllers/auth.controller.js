// require user model to get users data
let authHandler = require('../../services/auth.handler');
const { isEmptyString } = require('../../utils/general.functions');

// login
const processLogin = (req, res) => {
    // get user and password from the httpRequest body
    const {username, password} = req.body;
    // validate user and password inputs
    if ( isEmptyString(username) || isEmptyString(password) ) {
        return res.status(401).json( {msg: 'Verifique usuário e senha informados.'} );
    }

    let token = authHandler.login(username, password, (err, token) => {
        if (err) return res.status(401).json( {msg: 'Não foi possível autenticar o acesso. Verifique usuário / senha. ' + err});
        return res.status(200).json({msg:'token gerado', token});
    });
}

// logout
const processLogout = (req, res, next) => {
    // which task should be conducted on logout?
    return res.json({msg:'processo de logout ...'})
}

module.exports = {processLogin, processLogout};
