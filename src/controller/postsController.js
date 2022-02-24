const postsModel = require('../models/postsModel');

async function postsIndex(req, res) {
  const posts = await postsModel.getPostsDb();
  if (posts === false) {
    res.status(500);
    return;
  }
  res.json(posts);
}

module.exports = {
  postsIndex,
};
