const catModel = require('../models/catModel');

async function catIndex(req, res) {
  const categories = await catModel.getAllCategoriesDb();

  if (categories === false) {
    res.status(500);
    return;
  }
  res.json(categories);
}

module.exports = {
  catIndex,
};
