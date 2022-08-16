const salesServices = require('../services/salesServices');

const addSales = async (req, res) => { 
  try {
    const sales = req.body;
    const result = await salesServices.addSales(sales);
    console.log('result controller', result);
    if (result === false) { 
      return res.status(404).json({ message: 'Product not found' });
    }
     console.log('result controller vem oq ?', result);
     return res.status(201).json(result);
  } catch (err) { 
    console.error(err);
    return res.status(500).json('Erro ao tentar realizar a operação');
  }
};

module.exports = {
  addSales,
};
