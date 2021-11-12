const { Router } = require('express');

const router = Router();

const { 
        productsGet, 
        productsPost, 
        productsGetBySKU, 
        productsPut, 
        productsDelete
    } = require('../controllers/products')

router.get('/', productsGet);

router.post('/', productsPost);

router.get('/:sku', productsGetBySKU);

router.put('/:sku', productsPut);

router.delete(':sku', productsDelete);

module.exports = router;