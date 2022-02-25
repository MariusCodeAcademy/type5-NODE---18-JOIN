const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function insertNewComment(newCommentData) {
  try {
    console.log(' insertNewComment newCommentData ===', newCommentData);
    const { body, author, post_id } = newCommentData;
    const conn = await mysql.createConnection(dbConfig);
    const sql = 'INSERT INTO comments (body, author, post_id) VALUES (?, ?, ?)';
    const [addCommentResult] = await conn.execute(sql, [body, author, post_id]);
    await conn.close();
    return addCommentResult;
  } catch (error) {
    console.log('insertNewComment ', error);
    await conn.close();
    return false;
  }
}

module.exports = {
  insertNewComment,
};
