const express = require('express');
const { createUserController } = require('./controllers/userController');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', createUserController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));