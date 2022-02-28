const express = require('express');
const catControll = require('../../controller/catController');

const catRoutes = express.Router();

catRoutes.get('/', catControll.catIndex);

module.exports = catRoutes;
