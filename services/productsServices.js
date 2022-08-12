const productsModel = require('../models/productsModels');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  if (!result) return [];
  return result;
};

const getProductById = async (id) => {
  const result = await productsModel.getProductById(id);
  if (!result) return [];
  return result[0];
};

module.exports = {
  getAllProducts,
  getProductById,
};