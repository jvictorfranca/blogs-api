const DISPLAY_NAME_LENGTH_MESSAGE = '"displayName" length must be at least 8 characters long';
const REQUIRED_EMAIL_MESSAGE = '"email" is required';
const INVALID_EMAIL_MESSAGE = '"email" must be a valid email';
const PASSWORD_LENGTH_MESSAGE = '"password" length must be 6 characters long';
const REQUIRED_PASSWORD_MESSAGE = '"password" is required';
const PASSWORD_NOT_EMPTY_MESSAGE = '"password" is not allowed to be empty';
const EMAIL_NOT_EMPTY_MESSAGE = '"email" is not allowed to be empty';
const createErrorMessage = (message, status = 400) => ({ answer: { message }, status });

const isEmailValid = (email) => {
  if (!email.includes('@') || !email.includes('.com')) { return false; } 
  if (email.indexOf('@') < 2) { return false; }
  return true;
}; 
const validateCreateUserCredentials = (userOBJ) => {
switch (true) {
  case !userOBJ.email:
    return createErrorMessage(REQUIRED_EMAIL_MESSAGE);
  case !userOBJ.password:
    return createErrorMessage(REQUIRED_PASSWORD_MESSAGE);
    case userOBJ.password.length < 6:
      return createErrorMessage(PASSWORD_LENGTH_MESSAGE);
  case !isEmailValid(userOBJ.email):
    return createErrorMessage(INVALID_EMAIL_MESSAGE);
  default:
    return null;
}
};

const validateLoginUserCredentials = (credientials) => {
  switch (true) {
    case credientials.email === undefined:
      return createErrorMessage(REQUIRED_EMAIL_MESSAGE);
    case credientials.password === undefined:
      return createErrorMessage(REQUIRED_PASSWORD_MESSAGE);
    case credientials.password.length === 0:
      return createErrorMessage(PASSWORD_NOT_EMPTY_MESSAGE);
    case credientials.email.length === 0:
      return createErrorMessage(EMAIL_NOT_EMPTY_MESSAGE);
    default:
      return null;
  }
  };

const validateName = (userObj) => {
  if (userObj.displayName.length < 8) { return createErrorMessage(DISPLAY_NAME_LENGTH_MESSAGE); }
  return null;
};

const validateAllCreateUserCredentials = (userOBJ) => {
  if (validateName(userOBJ)) { return validateName(userOBJ); }
  if (validateCreateUserCredentials(userOBJ)) { return validateCreateUserCredentials(userOBJ); }
  return null;
};

const validateLoginUser = (credentials, userFound) => {
  if (
    !userFound
     || userFound.email !== credentials.email 
     || userFound.password !== credentials.password
     ) { return false; }
  return true;
};

module.exports = {
  validateAllCreateUserCredentials,
  validateLoginUserCredentials,
  createErrorMessage,
  validateLoginUser,
};