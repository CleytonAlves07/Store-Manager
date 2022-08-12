const productsService = require('../services/productsServices');

const getAllProducts = async (_req, res) => {
  try {
    const results = await productsService.getAllProducts();
    if (!results || results.length < 1) {
      return res.status(404).json({ message: 'Products not found' });
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao tentar realizar a operação' });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productsService.getProductById(id);
    if (!result || result.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(result);
  } catch (err) { 
    return res.status(500).json({ message: 'Erro ao tentar realizar a operação' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};