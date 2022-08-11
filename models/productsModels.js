const connection = require('../helpers/connection');

const getAllProducts = async () => {
  const [rows] = await connection
    .execute('SELECT id, name FROM StoreManager.products');
  
  return rows;
};

module.exports = {
  getAllProducts,
};