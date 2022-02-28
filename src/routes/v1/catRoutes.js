const express = require('express');
const catControll = require('../../controller/catController');

const catRoutes = express.Router();

catRoutes.get('/', catControll.catIndex);
catRoutes.get('/:catId', catControll.singleCategory);

module.exports = catRoutes;
