const REQUIRED_TITLE_MESSAGE = '"title" is required';
const REQUIRED_CONTENT_MESSAGE = '"content" is required';
const REQUIRED_CATEGORY_ID_MESSAGE = '"categoryIds" is required';

const {
  createErrorMessage,
} = require('./validateCreateUserCredentials');

const validateCreatePost = (postOBJ) => {
  switch (true) {
    case !postOBJ.title:
      return createErrorMessage(REQUIRED_TITLE_MESSAGE);
    case !postOBJ.content:
      return createErrorMessage(REQUIRED_CONTENT_MESSAGE);
    case !postOBJ.categoryIds:
      return createErrorMessage(REQUIRED_CATEGORY_ID_MESSAGE);
    default:
      return null;
  }
  };

  module.exports = {
    validateCreatePost,
    createErrorMessage,
  };