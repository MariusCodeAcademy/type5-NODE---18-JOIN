const express = require('express');
const commentsController = require('../../controller/commentsController');

const commentsRoutes = express.Router();

commentsRoutes.post('/', commentsController.addComment);

// GET /comments/byPost/:postId (grazinti komentarus kai duotas post ID)
// SELECT * FROM `comments` WHERE post_id = ?;
commentsRoutes.get('/byPost/:postId', commentsController.postComments);

// POST /comments/
/*
{
  author:
  body:
  post_id
}
*/

module.exports = commentsRoutes;
