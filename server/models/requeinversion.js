const { Schema, model } = require('mongoose')

const requeinversionSchema = Schema({
   codigoPlan: {
      type: String,
      required: [true, '**** Db: El codigo del plan de negocio es requerido']
   },
   tipoActivo: {
      type: String,
      required: [true, '**** Db: El tipo activo  es requerido']
   },
   descripcion: {
      type: String,
      required: [true, '**** Db: La descripción es requerida']
   },
   cantidad: {
      type: Number,
      required: [true, '**** Db: La cantidad  es requerida']
   },
   valorUnitario: {
      type: String,
      required: [true, '**** Db: El valor unitario es requerido']
   },
   requisitoTecnico: {
      type: String,
      required: [true, '**** Db: El requisito técnico es requerido']
   }
});

requeinversionSchema.methods.toJSON = function(){
   const { __v, _id,  ...requeinversion } = this.toObject();
   requeinversion.requeinversionId = _id;
   return requeinversion;
}

module.exports = model('requeinversion', requeinversionSchema);