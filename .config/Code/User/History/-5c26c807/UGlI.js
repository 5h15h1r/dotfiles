const {JWT_SECRET} = require('./keys')
const jwt = require('jsonwebtoken')
const generateToken = (id) =>{
    return jwt.sign(
        {id},
        JWT_SECRET,
        {expiresIn:"1d"}
        )
}

module.exports = generateToken; 