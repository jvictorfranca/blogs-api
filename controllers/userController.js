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
  const answerUsers = await getAllUsersService();
  return res.status(answerUsers.status).json(answerUsers.answer);
};

const getAUserController = async (req, res, _next) => {
  const { id } = req.params;
  const answerUser = await getAUserService(id);
  return res.status(answerUser.status).json(answerUser.answer);
};

module.exports = {
  createUserController,
  loginUserController,
  getAllUsersController,
  getAUserController,
};