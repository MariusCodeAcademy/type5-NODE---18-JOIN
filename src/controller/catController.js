const catModel = require('../models/catModel');

async function catIndex(req, res) {
  const categories = await catModel.getAllCategoriesDb();

  if (categories === false) {
    res.status(500);
    return;
  }
  res.json(categories);
}
async function singleCategory(req, res) {
  const { catId } = req.params;
  const singleCat = await catModel.getSingleCatDb(catId);

  if (singleCat === false) {
    res.status(500);
    return;
  }
  res.json(singleCat);
}

module.exports = {
  catIndex,
  singleCategory,
};
