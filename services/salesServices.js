const salesModel = require('../models/salesModels');
const validateSales = require('../middlewares/validateSales');
const productModel = require('../models/productsModels');

const addSales = async (arrayProducts) => {
  const data = await
    Promise.all(arrayProducts.map((product) => productModel.getProductById(product.productId)));
  const isValid = await validateSales.productIdIsValid(data);
  
  if (isValid) {
    const result = await salesModel.addSales();
    const dataWithId = { id: result, itemsSold: arrayProducts };
    await Promise.all(arrayProducts.map((element) => 
      salesModel.addSalesProducts(result, element.productId,
        element.quantity)));
    
  return dataWithId;
  } 
  return false;
};

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

const getSaleById = async (id) => {
  const result = await salesModel.getSaleById(id);
  if (!result) return false;
  return result;
};

module.exports = {
  addSales,
  getAllSales,
  getSaleById,
};