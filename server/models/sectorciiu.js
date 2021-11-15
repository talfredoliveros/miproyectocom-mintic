const { Schema, model } = require('mongoose')

const sectorciiuSchema = Schema({
   codigociiu: {
      type: String,
      required: [true, '**** Db: El codigo CIUU es requerido'],
      unique: true
   },
   descripcion: {
      type: String,
      required: [true, '**** Db: La descripcion es requerida']
   }

});

sectorciiuSchema.methods.toJSON = function(){
   const { __v, _id,  ...sectorciiu } = this.toObject();
   sectorciiu.sectorciiuId = _id;
   return sectorciiu;
}

module.exports = model('sectorciiu', sectorciiuSchema);