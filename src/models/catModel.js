const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getAllCategoriesDb() {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM categories';
    const [categories] = await conn.query(sql);
    console.log('b4 return categories');
    return categories;
  } catch (error) {
    console.log('getAllCategoriesDb', error);
    return false;
  } finally {
    console.log('finally');
    await conn.close();
  }
}
async function getSingleCatDb(id) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM categories WHERE category_id = ?';
    const [categories] = await conn.execute(sql, [id]);
    return categories;
  } catch (error) {
    console.log('getSingleCatDb', error);
    return false;
  } finally {
    await conn.close();
  }
}

module.exports = {
  getAllCategoriesDb,
  getSingleCatDb,
};
