const express = require('express');

const productsController = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

module.exports = router;
