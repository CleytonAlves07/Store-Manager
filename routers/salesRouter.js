const express = require('express');

const salesController = require('../controllers/salesControllers');

const check = require('../middlewares/validateSales');

const router = express.Router();

router.post('/', check.validateProducts, check.validateQuantity, salesController.addSales);

module.exports = router;
