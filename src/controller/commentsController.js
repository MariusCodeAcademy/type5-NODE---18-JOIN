const { insertNewComment } = require('../models/commentsModel');

async function addComment(req, res) {
  const newCommData = req.body;
  // validacija
  const addingCommentResult = await insertNewComment(newCommData);

  return addingCommentResult === false
    ? res.status(500)
    : res.json(addingCommentResult);
}

module.exports = {
  addComment,
};
