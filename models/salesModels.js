const connection = require('../helpers/connection');

const addSales = async () => {
  const [rows] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP);');
  
  return rows.insertId;
};

const addSalesProducts = async (saleId, productId, quantity) => {
  // console.log('addSalesProducts', saleId, productId, quantity);
  const data = await connection
    .execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
  );
  // console.log('esse é o data', data);
  return data;
};

const getAllSales = async () => {
  const [rows] = await connection
    .execute(`
    SELECT sales.id as saleId, date, products.id as productId, sales_products.quantity as quantity
    FROM StoreManager.sales 
    JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    JOIN StoreManager.products
    ON StoreManager.products.id = StoreManager.sales_products.product_id
    GROUP BY saleId, productId, quantity
    ORDER BY saleId, productId
    `);
  return rows;
};

// sales.id as saleId, date, product.id as productId, quantity 

const getSaleById = async (id) => { 
  const [rows] = await connection
    .execute(`
      SELECT sales.date, sapr.product_id AS productId, sapr.quantity      
      FROM StoreManager.sales AS sales
      INNER JOIN StoreManager.sales_products AS sapr
      ON sales.id = sapr.sale_id
      WHERE sales.id  = ?
      ORDER BY productId`,
      [id]);
  return rows;
};

module.exports = {
  addSales,
  addSalesProducts,
  getAllSales,
  getSaleById,
};