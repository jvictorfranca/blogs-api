const USER_REGISTERED_MESSAGE = 'User already registered';

const { User } = require('../models');
const {
   validateAllCreateUserCredentials,
    createErrorMessage, 
  } = require('./utils/validateCreateUserCredentials');

const createUserService = async (userOBJ) => {
  if (validateAllCreateUserCredentials(userOBJ)) {
     return validateAllCreateUserCredentials(userOBJ); 
}
const userFound = await User.findOne({ where: { email: userOBJ.email } });
console.log(userFound);
if (userFound) {
  return createErrorMessage(USER_REGISTERED_MESSAGE, 409);
}
const newUser = await User.create(userOBJ);
  return { status: 201, answer: newUser };
};

module.exports = {
  createUserService,
};