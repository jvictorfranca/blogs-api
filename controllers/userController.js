const 
{
   createUserService,
   loginUserService,
   getAllUsersService,
   getAUserService, 
} = require('../services/usersServices');

const createUserController = async (req, res, _next) => {
  const userOBJ = {
    email: req.body.email,
    password: req.body.password,
    displayName: req.body.displayName,
    image: req.body.image,
  };
  const answerUser = await createUserService(userOBJ);
  return res.status(answerUser.status).json(answerUser.answer);
};

const loginUserController = async (req, res, _next) => {
  const credentials = {
    email: req.body.email,
    password: req.body.password,
  };
  const answerUser = await loginUserService(credentials);
  return res.status(answerUser.status).json(answerUser.answer);
};

const getAllUsersController = async (req, res, _next) => {
  const token = req.headers.authorization;
  const answerUsers = await getAllUsersService(token);
  return res.status(answerUsers.status).json(answerUsers.answer);
};

const getAUserController = async (req, res, _next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const answerUser = await getAUserService(token, id);
  return res.status(answerUser.status).json(answerUser.answer);
};

module.exports = {
  createUserController,
  loginUserController,
  getAllUsersController,
  getAUserController,
};