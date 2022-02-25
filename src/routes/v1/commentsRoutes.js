const express = require('express');
const commentsController = require('../../controller/commentsController');

const commentsRoutes = express.Router();

commentsRoutes.post('/', commentsController.addComment);

// POST /comments/
/*
{
  author:
  body:
  post_id
}
*/

module.exports = commentsRoutes;
