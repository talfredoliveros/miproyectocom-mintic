const { Schema, model } = require('mongoose')

const plandenegocioSchema = Schema({
   codigoPlan: {
      type: String,
      required: [true, '**** Db: El codigo del plan de negocio es requerido']
   },
   nombrePlan: {
      type: String,
      required: [true, '**** Db: El nombre del plan de negocio es requerido']
   },
   identidadEmprendedor: {
      type: String,
      required: [true, '**** Db: La identidad del emprendedor es requerida']
   },
   descripcionPlan: {
      type: String,
      required: [true, '**** Db: La descripción del Plan es requerida']
   },
   objetivoPlan: {
      type: String,
      required: [true, '**** Db: El/Los Objetivo/s del Plan es/son requerido/s']
   },
   LocalizaEmpresa: {
      type: String,
      required: [true, '**** Db: La localizazión de la empresa es requerida']
   },
   sectorciiu: {
      type: String,
      required: [true, '**** Db: El sector economico CIIU es requerido']
   },
   necesidadClie: {
      type: String,
      required: [true, '**** Db: La necesidad cliente es requerida']
   },
   CrecimientoMercado: {
      type: String,
      required: [true, '**** Db: Crecimiento mercado es requerido']
   },
   analisisCompetencia: {
      type: String,
      required: [true, '**** Db: Análisis  competencia es requerido']
   },
   ProducServPortafolio: {
      type: String,
      required: [true, '**** Db: El portafolio de productos o servicios es requerido']
   },
   generaIngresos: {
      type: String,
      required: [true, '**** Db: La generación de Ingresos es requerida']
   },
   proyeccionVenta: {
      type: String,
      required: [true, '**** Db: La proyección de ventas es requerida']
   },
   JustificaProyecVenta: {
      type: String,
      required: [true, '**** Db: La justificación de la proyeccion de ventas es requerida']
   },
   LugarFisicoFunciona: {
      type: String,
      required: [true, '**** Db: El lugar fisico funcionamiento es requerido']
   },
   condicInfraestructura: {
      type: String,
      required: [true, '**** Db: La condiciones tecnicas infraestructas son requeridas']
   },
   procesoProduccion: {
      type: String,
      required: [true, '**** Db: El proceso de producción del bien o servicio es requerido']
   },
   capacidadProductiva: {
      type: String,
      required: [true, '**** Db: La capacidad productiva es requerida']
   },
   perfilEmprendedor: {
      type: String,
      required: [true, '**** Db: El prefil emprendedor es requerido']
   },
   cargosEmpresa: {
      type: String,
      required: [true, '**** Db: La lista de cargos en la empresa son requeridos']
   },
   futuroNegocio: {
      type: String,
      required: [true, '**** Db: El futuro del negocio es requerido']
   },
   proyecciones: {
      type: String,
      required: [true, '**** Db: Las proyecciones del negocio son requeridas']
   },
   inversiones: {
      type: String,
      required: [true, '**** Db: Las inversiones en el negocio son requeridas']
   },
   capitalTrabajo: {
      type: String,
      required: [true, '**** Db: El capital de trabajo es requerido']
   },
   riesgosEnfrentar: {
      type: String,
      required: [true, '**** Db: Los riesgos a enfrentar en el negocio son requeridos']
   },
   status: {
      type: Boolean,
      required: [true, '**** Db: El status es requerido'],
      default: true
   }
});

plandenegocioSchema.methods.toJSON = function(){
   const { __v, _id,  ...plandenegocio } = this.toObject();
   plandenegocio.plandenegocioId = _id;
   return plandenegocio;
}

module.exports = model('plandenegocio', plandenegocioSchema);