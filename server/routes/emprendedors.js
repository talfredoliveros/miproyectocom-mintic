const { Router } = require('express');
const { check } = require('express-validator');

const { 
   emprendedorExist,
   emprendedorByIdExists,
   emprendedorEmailExist
} = require('../helpers/req-validators');

const { 
   validateDate
} = require('../middlewares');

const router = Router();

const { 
      emprendedorsGet,
      emprendedorsPost,
      emprendedorsPut,
      emprendedorsDelete
   } = require('../controllers/emprendedors')


router.get('/', emprendedorsGet);

router.get('/:id', emprendedorsGet);

router.post('/',[
   check('identidad', 'Numero Identificación es requerido').notEmpty(),
   check('identidad').custom(emprendedorExist),
   check('nombre', 'El nombre es requerido').notEmpty(),
   check('apellidos','El/los apellido/s es/son requeridos').notEmpty(),
   check('fechaNac', 'Fecha Nacimiento es requerida').notEmpty(),
   check('direccion', 'La Direccion es requerida').notEmpty(),
   check('telefono', 'El Teléfono es requerido').notEmpty(),
   check('genero', 'El género es requerido').notEmpty(),
   check('email', 'El correo no es valido').isEmail(),
   check('email').custom(emprendedorEmailExist),
   validateDate
], emprendedorsPost);


router.put('/:id', [
   check('id', 'No es un Id válido').isMongoId(),
   check('id').custom(emprendedorByIdExists),
   check('nombre', 'El nombre es requerido').not().isEmpty(),
   validateDate
], emprendedorsPut);

router.delete('/:id', [
   //validateJWT,
   //isAdmin,
   check('id', 'No es una Id valido').isMongoId(),
   check('id').custom(emprendedorByIdExists),
   validateDate
], emprendedorsDelete);


module.exports = router;