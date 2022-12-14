// const express = require('express');
// Pode ser feito assim também
const router = require('express').Router();

// const router = express.Router();

const salesController = require('../controllers/salesControllers');

const check = require('../middlewares/validateSales');

router.post('/', check.validateProducts, check.validateQuantity, salesController.addSales);

router.get('/', salesController.getAllSales);

router.get('/:id', salesController.getSaleById);

module.exports = router;
