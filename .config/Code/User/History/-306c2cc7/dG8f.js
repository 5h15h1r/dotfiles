const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req, res, next) =>{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token.header.authorization.split(" ")[1]
            
            const decode = jwt.decode()
        } catch (error) {
            
        }
    }

}