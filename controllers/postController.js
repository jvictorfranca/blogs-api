const { createPostService /* getAllPostsService */ } = require('../services/postsService');

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

const getAllCategoriesController = async (_req, _res, _next) => {
  // const answerCategories = await getAllCategoriesService();
  // return res.status(answerCategories.status).json(answerCategories.answer);
};

module.exports = {
  createPostController,
  getAllCategoriesController,
};