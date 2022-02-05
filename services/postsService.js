const CATEGORY_ID_NOT_FOUND_MESSAGE = '"categoryIds" not found';

const { BlogPost, PostsCategory, Category, User } = require('../models');
const { validateCreatePost, createErrorMessage } = require('./utils/validateCreatePost');

const createPostService = async (postOBJ) => {
  if (validateCreatePost(postOBJ)) { return validateCreatePost(postOBJ); } 
  const objectToCreate = {
  title: postOBJ.title, content: postOBJ.content, userId: postOBJ.userId };
  await BlogPost.create(objectToCreate);
  const findNew = await BlogPost.findOne({ where: { title: postOBJ.title } });
  let answerOBJ = { status: 201, answer: findNew };
  let allCategories = await Category.findAll();
  allCategories = allCategories.map((category) => category.id);
  postOBJ.categoryIds.forEach((category) => {
    if (!allCategories.includes(category)) {
      answerOBJ = createErrorMessage(CATEGORY_ID_NOT_FOUND_MESSAGE);
    } 
}); 
  if (answerOBJ.status === 201) {
  postOBJ.categoryIds.forEach((category) => {
    PostsCategory.create({ postId: findNew.dataValues.id, categoryId: category });
  }); 
} return answerOBJ; 
};

const getAllPostsService = async () => {
  const posts = await BlogPost.findAll(
    { attributes: [
      'id', 'userId', 'title', 'content',
       ['updated', 'updated'], ['published', 'published'],
    ],
       include: 
       [
          { model: Category, as: 'categories', through: { attributes: [] } },
          { model: User, as: 'user' },
        ] },
);
  return { status: 200, answer: posts };
};

module.exports = {
  createPostService,
  getAllPostsService,
};