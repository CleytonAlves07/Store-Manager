const salesServices = require('../services/salesServices');

const addSales = async (req, res) => { 
  try {
    const sales = req.body;
    const result = await salesServices.addSales(sales);
    // console.log('result controller', result);
    if (result === false) { 
      return res.status(404).json({ message: 'Product not found' });
    }
    //  console.log('result controller vem oq ?', result);
     return res.status(201).json(result);
  } catch (err) { 
    console.error(err);
    return res.status(500).json('Erro ao tentar realizar a operação');
  }
};

const getAllSales = async (_req, res) => {
  try {
    const results = await salesServices.getAllSales();
    if (!results || results.length < 1) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao tentar realizar a operação' });
  }
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await salesServices.getSaleById(id);
    if (!result || result.length < 1) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json(result);
  } catch (err) { 
    console.error(err);
    return res.status(500).json({ message: 'Erro ao tentar realizar a operação' });
  }
};

module.exports = {
  addSales,
  getAllSales,
  getSaleById,
};
