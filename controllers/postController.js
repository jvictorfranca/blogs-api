const { createPostService, /* getAllPostsService */ 
getAllPostsService } = require('../services/postsService');

const createPostController = async (req, res, _next) => {
  const postOBJ = {
    title: req.body.title,
    content: req.body.content,
    userId: req.user.id,
    categoryIds: req.body.categoryIds,
  };
  const answerUser = await createPostService(postOBJ);
  return res.status(answerUser.status).json(answerUser.answer);
};

const getAllPostsController = async (req, res, _next) => {
  const answerPosts = await getAllPostsService();
  return res.status(answerPosts.status).json(answerPosts.answer);
};

module.exports = {
  createPostController,
  getAllPostsController,
};