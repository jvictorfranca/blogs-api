const { Category } = require('../models');

const {
  validateCreateCategory, 
} = require('./utils/validateCreateCategory');

const createCategoryService = async (categoryOBJ) => {
  if (validateCreateCategory(categoryOBJ)) {
     return validateCreateCategory(categoryOBJ); 
}

const newCategory = await Category.create(categoryOBJ);
  return { status: 201, answer: newCategory };
};

module.exports = {
  createCategoryService,
};