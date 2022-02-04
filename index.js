const express = require('express');
const { 
  createUserController,
  loginUserController,
  getAllUsersController,
  getAUserController,
} = require('./controllers/userController');
const authMiddleware = require('./middlewares/authmiddleware');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', authMiddleware, getAllUsersController);
app.get('/user/:id', authMiddleware, getAUserController);

app.post('/user', createUserController);
app.post('/login', loginUserController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));