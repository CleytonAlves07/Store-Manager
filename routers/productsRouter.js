const express = require('express');
const validateProducts = require('../middlewares/validateProducts');

const productsController = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

router.post('/', validateProducts.validateName, productsController.addProduct);

module.exports = router;
