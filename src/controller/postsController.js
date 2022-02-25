const postsModel = require('../models/postsModel');

async function postsIndex(req, res) {
  const posts = await postsModel.getPostsDb();
  if (posts === false) {
    res.status(500);
    return;
  }
  res.json(posts);
}
async function singlePost(req, res) {
  const singlePostData = await postsModel.getSinglePostDb(req.params.id);
  if (singlePostData === false) {
    res.status(500);
    return;
  }
  res.json(singlePostData);
}

module.exports = {
  postsIndex,
  singlePost,
};
