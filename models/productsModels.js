const connection = require('../helpers/connection');

const getAllProducts = async () => {
  const [rows] = await connection
    .execute('SELECT id, name FROM StoreManager.products');
  
  return rows;
};

const getProductsById = async (id) => { 
  const [rows] = await connection.execute(`SELECT id, name FROM StoreManager.products 
    WHERE id = ?`,
       [id]);
  return rows;
};

module.exports = {
  getAllProducts,
  getProductsById,
};