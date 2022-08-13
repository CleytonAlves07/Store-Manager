const connection = require('../helpers/connection');

const getAllProducts = async () => {
  const [rows] = await connection
    .execute('SELECT id, name FROM StoreManager.products');
  
  return rows;
};

const getProductById = async (id) => { 
  const [rows] = await connection.execute(`SELECT id, name FROM StoreManager.products 
    WHERE id = ?`,
    [id]);
  return rows;
};

const addProduct = async (name) => {
  const [row] = await connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)',
    [name]);
  const result = {
    id: row.insertId,
    name,
  };
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};