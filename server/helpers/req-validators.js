const User = require('../models/user');
const Rol = require('../models/rol');
const Emprendedor = require('../models/emprendedor');

const emailExist = async (email = '') =>{
    let user = await User.findOne( { email } );
    if(user){
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}

const rolExist = async (rol = '') =>{
    let rolInstance = await Rol.findOne( { rol } );
    if(!rolInstance){
        throw new Error(`El rol ${ rol } no existe`);
    }
}

const userByIdExists = async (id = '') => {
    let user = await User.findById(id);
    if(!user){
        throw new Error(`El id ${ id } no es un usuario`);
    }
}

const emprendedorEmailExist = async (email = '') =>{
    let emprendedor = await Emprendedor.findOne( { email } );
    if(emprendedor){
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}
const emprendedorExist = async (identidad = '') =>{
    let emprendedor = await Emprendedor.findOne( { identidad } );
    if(emprendedor){
        throw new Error(`Numero documento identidad ${ identidad } ya esta registrada`);
    }
}

const emprendedorByIdExists = async (id = '') => {
    let emprendedor = await Emprendedor.findById(id);
    if(!emprendedor){
        throw new Error(`El id ${ id } no es un id de emprendedor`);
    }
}


module.exports = {
    emailExist,
    rolExist,
    userByIdExists,
    emprendedorEmailExist,
    emprendedorExist,
    emprendedorByIdExists,
}
