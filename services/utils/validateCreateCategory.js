const REQUIRED_NAME_MESSAGE = '"name" is required';

const {
  createErrorMessage,
} = require('./validateCreateUserCredentials');

const validateCreateCategory = (categoryOBJ) => {
  switch (true) {
    case !categoryOBJ.name:
      return createErrorMessage(REQUIRED_NAME_MESSAGE);
    default:
      return null;
  }
  };

  module.exports = {
    validateCreateCategory,
    createErrorMessage,
  };