const validateQuantity = (req, res, next) => {
  const sales = req.body;
  for (let i = 0; i < sales.length; i += 1) { 
    const { quantity } = sales[i];
    if (quantity <= 0) { 
     return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (!quantity) {
     return res.status(400).json({ message: '"quantity" is required' });
  }
  }
  next();
};

const validateProducts = (req, res, next) => { 
  const sales = req.body;
  for (let i = 0; i < sales.length; i += 1) {
    const { productId } = sales[i];
    if (!productId) {
     return res.status(400).json({ message: '"productId" is required' });
    }
  }
  
  next();
};

const productIdIsValid = async (data) => {
    const valid = data.some((product) => product.length === 0);
  return !valid;
};

module.exports = {
  validateProducts,
  validateQuantity,
  productIdIsValid,
};