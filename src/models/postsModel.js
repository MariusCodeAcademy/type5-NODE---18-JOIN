const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getPostsDb() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM posts';
    const [posts] = await conn.query(sql);
    await conn.close();
    return posts;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  getPostsDb,
};
