const express = require('express');

const productsController = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

router.post('/', productsController.addProduct);

module.exports = router;
