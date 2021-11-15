const { Schema, model } = require('mongoose')

const userSchema = Schema({
    name: {
        type: String,
        required: [true, '**** Db: El nombre es requerido']
    },
    password: {
        type: String,
        required: [true, '**** Db: La contraseña es requerida']
    },
    descripcion: {
        type: String
    },
    email: {
        type: String,
        required: [true, '**** Db: El email es requerido'],
        unique: true
    },
    rol: {
        type: String,
        required: [true, '**** Db: El rol es requerido']
    },
    status: {
        type: Boolean,
        require: true,
        default: true
    }
});

userSchema.methods.toJSON = function(){
    const { __v, _id, password, ...user } = this.toObject();
    user.userId = _id;
    return user;
}

module.exports = model('User', userSchema);