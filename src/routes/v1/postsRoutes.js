const express = require('express');
const postsController = require('../../controller/postsController');

const postsRoutes = express.Router();

// GET /posts  (SELECT * FROM `posts`)
postsRoutes.get('/', postsController.postsIndex);

// GET /posts/:id (grazina duomenis apie posta kurio id === id)

module.exports = postsRoutes;
