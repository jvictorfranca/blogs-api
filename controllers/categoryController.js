const { createCategoryService } = require('../services/categoriesService');

const createCategoryController = async (req, res, _next) => {
  const categoryOBJ = {
    name: req.body.name,
  };
  const answerUser = await createCategoryService(categoryOBJ);
  return res.status(answerUser.status).json(answerUser.answer);
};

module.exports = {
  createCategoryController,
};