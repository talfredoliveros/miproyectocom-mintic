const { Schema, model } = require('mongoose')

const emprendedorSchema = Schema({
   identidad: {
      type: String,
      required: [true, '**** Db: La identificación es requerida'],
      unique: true
   },
   nombre: {
      type: String,
      required: [true, '**** Db: El nombre es requerido']
   },
   apellidos: {
      type: String,
      required: [true, '**** Db: Los apellidos son requeridos']
   },
   fechaNac: {
      type: Date,
      required: [true, '**** Db: La Fecha nacimiento es requerida']
   },
   direccion: {
      type: String,
      required: [true, '**** Db: La dirección es requerida']
   },
   telefono: {
      type: String,
      required: [true, '**** Db: El numero telefono es requerido']
   },
   genero: {
      type: String,
      required: [true, '**** Db: El genero es requerido']
   },
   email: {
      type: String,
      required: [true, '**** Db: El email es requerido'],
      unique: true
   },
   status: {
      type: Boolean,
      required: [true, '**** Db: El status es requerido'],
      default: true
   }
});

emprendedorSchema.methods.toJSON = function(){
    const { __v, _id,  ...emprendedor } = this.toObject();
    emprendedor.emprendedorId = _id;
    return emprendedor;
}

module.exports = model('Emprendedor', emprendedorSchema);