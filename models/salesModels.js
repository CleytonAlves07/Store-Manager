const connection = require('../helpers/connection');

const addSales = async () => {
  const [rows] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP);');
  
  return rows.insertId;
};

const addSalesProducts = async (saleId, productId, quantity) => {
  console.log('addSalesProducts', saleId, productId, quantity);
  const data = await connection
    .execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
  );
  console.log('esse é o data', data);
  return data;
};

module.exports = {
  addSales,
  addSalesProducts,
};