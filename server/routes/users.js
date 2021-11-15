const { Router } = require('express');
const { check } = require('express-validator');

const { 
    emailExist,
    rolExist,
    userByIdExists
} = require('../helpers/req-validators');
const { 
    validateDate,
    validateJWT,
    isAdmin,
    isRol
} = require('../middlewares');

const router = Router();

const { 
    usersGet,
    usersLogin,
    usersPost, 
    usersPut,
    usersDelete
} = require('../controllers/users');

router.get('/', [
    validateJWT,
    isRol('Admin', 'Seller')
], usersGet);

router.post('/login', [
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'Campo requerido').notEmpty(),
    validateDate
], usersLogin);

router.post('/',[
    check('name', 'El nombre es requerido').notEmpty(),
    check('password', 'La contraseña debe tener minimo 6 dighitos').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(emailExist),
    check('rol').custom(rolExist),
    validateDate
], usersPost);

router.put('/:id', [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(userByIdExists),
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateDate
], usersPut);

router.delete('/:id', [
    validateJWT,
    isAdmin,
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(userByIdExists),
    validateDate
], usersDelete);

// router.get('/:id', productsGetBySKU);

module.exports = router;