const { createCategoryService, getAllCategoriesService } = require('../services/categoriesService');

const createCategoryController = async (req, res, _next) => {
  const categoryOBJ = {
    name: req.body.name,
  };
  const answerUser = await createCategoryService(categoryOBJ);
  return res.status(answerUser.status).json(answerUser.answer);
};

const getAllCategoriesController = async (req, res, _next) => {
  const answerCategories = await getAllCategoriesService();
  return res.status(answerCategories.status).json(answerCategories.answer);
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};