const { createUserService } = require('../services/usersServices');

const createUserController = async (req, res, _next) => {
  const userOBJ = {
    email: req.body.email,
    password: req.body.password,
    displayName: req.body.displayName,
    image: req.body.image,
  };
  const answerUser = await createUserService(userOBJ);
  res.status(answerUser.status).json(answerUser.answer);
};

module.exports = {
  createUserController,
};