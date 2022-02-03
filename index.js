const express = require('express');
const { 
  createUserController,
  loginUserController,
  getAllUsersController,
} = require('./controllers/userController');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', getAllUsersController);

app.post('/user', createUserController);
app.post('/login', loginUserController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));