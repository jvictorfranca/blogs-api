const { verifyToken } = require('../services/authService');
const { createErrorMessage } = require('../services/utils/validateCreateUserCredentials');

const TOKEN_INVALID_MESSAGE = 'Expired or invalid token';
const TOKEN_NOT_FOUND_MESSAGE = 'Token not found';

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const answerOBJ = createErrorMessage(TOKEN_NOT_FOUND_MESSAGE, 401);
    return res.status(answerOBJ.status).json(answerOBJ.answer);
  }
  const tokenVerified = verifyToken(token);
  if (!tokenVerified) {
    const answerOBJ = createErrorMessage(TOKEN_INVALID_MESSAGE, 401);
    return res.status(answerOBJ.status).json(answerOBJ.answer);
  }
  req.user = tokenVerified;

  next();
};

module.exports = authMiddleware;