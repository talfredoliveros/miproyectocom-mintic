const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header("token-b29");
    if(!token){
        return res.status(401).json({
            msg: "El recurso requiere autenticación"
        })
    }

    try{
        const { userId } = jwt.verify(token, process.env.PRIVATEKEY);

        const user = await User.findById(userId);

        if(!user){
            return res.status(401).json({
                msg: "Token invalido - Id no valido"
            })
        }

        req.user = user;
        next();
    }
    catch(err){
        res.status(401).json({ msg: "Token invalido" })
    }
}

module.exports = {
    validateJWT
}