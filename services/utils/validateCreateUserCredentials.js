const DISPLAY_NAME_LENGTH_MESSAGE = '"displayName" length must be at least 8 characters long';
const REQUIRED_EMAIL_MESSAGE = '"email" is required';
const INVALID_EMAIL_MESSAGE = '"email" must be a valid email';
const PASSWORD_LENGTH_MESSAGE = '"password" length must be 6 characters long';
const REQUIRED_PASSWORD_MESSAGE = '"password" is required';

const createErrorMessage = (message, status = 400) => ({ answer: { message }, status });

const isEmailValid = (email) => {
  if (!email.includes('@') || !email.includes('.com')) { console.log('aqui'); return false; } 
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

const validateName = (userObj) => {
  if (userObj.displayName.length < 8) { return createErrorMessage(DISPLAY_NAME_LENGTH_MESSAGE); }
  return null;
};

const validateAllCreateUserCredentials = (userOBJ) => {
  if (validateName(userOBJ)) { return validateName(userOBJ); }
  if (validateCreateUserCredentials(userOBJ)) { return validateCreateUserCredentials(userOBJ); }
  return null;
};

module.exports = {
  validateAllCreateUserCredentials,
  createErrorMessage,
};