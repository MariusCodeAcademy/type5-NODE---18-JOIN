const express = require('express');
const postsController = require('../../controller/postsController');

const postsRoutes = express.Router();

// GET /posts  (SELECT * FROM `posts`)
postsRoutes.get('/', postsController.postsIndex);

module.exports = postsRoutes;
