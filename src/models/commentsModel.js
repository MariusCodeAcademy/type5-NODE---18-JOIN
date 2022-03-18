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
    return false;
  }
}
async function getCommentsByPostId(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
    SELECT comments.author, comments.body
    FROM posts
    INNER JOIN comments
    ON posts.post_id = comments.post_id
    WHERE posts.post_id = ?;
    `;
    const [result] = await conn.execute(sql, [id]);
    await conn.close();
    return result;
  } catch (error) {
    console.log('getCommentsByPostId ', error);
    return false;
  }
}

module.exports = {
  insertNewComment,
  getCommentsByPostId,
};
