const {response, request} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const usersGet = async (req = request, res = response) => {
    const { limit = 5, page = 1 } = req.query;
    const query = { status: true };

    const skip = limit * (page - 1);

    const [ users, totalUsers ] = await Promise.all([
                                                User.find(query)
                                                    .skip(Number(skip))
                                                    .limit(Number(limit)),
                                                User.countDocuments(query)
                                            ]);

    res.json({
        users,
        totalUsers
    });
}

const usersLogin = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                msg: "Usuario o contraseña invalida - User not found"
            })
        }

        if(!user.status){
            return res.status(400).json({
                msg: "Usuario inactivo enviar correo a xxxxx@mail.com"
            })
        }

        const validatePassword = bcrypt.compareSync(password, user.password);
        if(!validatePassword){
            return res.status(400).json({
                msg: "Usuario o contraseña invalida - Bad password"
            })
        }

        const token = jwt.sign(user.toJSON(), process.env.PRIVATEKEY, {
            expiresIn: "12h"
        })

        res.json({
            user,
            token
        })
    }
    catch(err){
        res.status(500).json({ msg: "Contactese con servicio al cliente" })
    }
}

const usersPost = async (req, res) => {
    const { name, email, password, rol } = req.body;

    const user = new User({ name, email, password, rol });

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({ user });
}

const usersGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU Products controller" });
}

const usersPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, ...data } = req.body;

    if(password){
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, data, { new: true });

    res.json(user);
}

const usersDelete = async (req, res) => {
    const { id } = req.params;

    // Eliminación fisica de registros en db
    // const user = await User.findByIdAndDelete( id );

    const user = await User.findByIdAndUpdate(id, { status: false });

    res.json(user);
}

module.exports = {
    usersGet,
    usersLogin,
    usersPost,
    usersPut,
    usersDelete
}