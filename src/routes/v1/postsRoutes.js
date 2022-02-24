const express = require('express');

const postsRoutes = express.Router();
// GET /posts  (SELECT * FROM `posts`)
postsRoutes.get('/', async (req, res) => {
  res.json('sample route');
});

module.exports = postsRoutes;
