const {
  insertNewComment,
  getCommentsByPostId,
} = require('../models/commentsModel');

async function addComment(req, res) {
  const newCommData = req.body;
  // validacija
  const addingCommentResult = await insertNewComment(newCommData);

  return addingCommentResult === false
    ? res.status(500)
    : res.json(addingCommentResult);
}
async function postComments(req, res) {
  const { postId } = req.params;
  const comments = await getCommentsByPostId(postId);

  return comments === false ? res.status(500) : res.json(comments);
}

module.exports = {
  addComment,
  postComments,
};
