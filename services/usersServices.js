const USER_REGISTERED_MESSAGE = 'User already registered';
const INVALID_FIELDS_MESSAGE = 'Invalid fields';

const USER_DOES_NOT_EXIST = 'User does not exist';

const { User } = require('../models');
const { genToken } = require('./authService');
const 
{
  validateAllCreateUserCredentials,
  validateLoginUserCredentials,
  createErrorMessage, 
  validateLoginUser,
} = require('./utils/validateCreateUserCredentials');

const createUserService = async (userOBJ) => {
  if (validateAllCreateUserCredentials(userOBJ)) {
     return validateAllCreateUserCredentials(userOBJ); 
}
const userFound = await User.findOne({ where: { email: userOBJ.email } });
if (userFound) {
  return createErrorMessage(USER_REGISTERED_MESSAGE, 409);
}
const newUser = await User.create(userOBJ);
  return { status: 201, answer: newUser };
};

const loginUserService = async (credentials) => {
  if (validateLoginUserCredentials(credentials)) {
    return validateLoginUserCredentials(credentials); 
  }
  const userFound = await User.findOne({ where: { email: credentials.email } });
  if (!validateLoginUser(credentials, userFound)) {
    return createErrorMessage(INVALID_FIELDS_MESSAGE);
  }
  const tokenOBJ = {
    token: genToken({ email: userFound.email, id: userFound.id }),
  };
  return { status: 200, answer: tokenOBJ };
};

const getAllUsersService = async () => {
  const users = await User.findAll();
  return { status: 200, answer: users };
};

const getAUserService = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return createErrorMessage(USER_DOES_NOT_EXIST, 404);
  }
  return { status: 200, answer: user };
};

module.exports = {
  createUserService,
  loginUserService,
  getAllUsersService,
  getAUserService,
};