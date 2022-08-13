const productsModel = require('../models/productsModels');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  return result;
};

const getProductById = async (id) => {
  const result = await productsModel.getProductById(id);
  if (!result) return false;
  return result[0];
};

const addProduct = async (name) => {
  const result = await productsModel.addProduct(name);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};