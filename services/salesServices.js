const salesModel = require('../models/salesModels');
const validateSales = require('../middlewares/validateSales');

const addSales = async (arrayProducts) => {
  const isValid = await validateSales.productIdIsValid(arrayProducts);
  console.log('IsValid salesServices', isValid);
  if (isValid) {
    const result = await salesModel.addSales();
    console.log('result retorna id salesServices', result);
  
    const data = await Promise.all(arrayProducts
      .map((product) => salesModel.addSalesProducts(result, product.productId, product.quantity)));

    console.log('data do salesServices', data);
    const dataWithId = { id: result, itemsSold: arrayProducts };
  return dataWithId;
  } 
  return false;
};

module.exports = {
  addSales,
};