const express = require('express');
const 
    {
    createCategoryController,
    getAllCategoriesController,
    } = require('./controllers/categoryController');
const { createPostController } = require('./controllers/postController');
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

// gets
app.get('/user', authMiddleware, getAllUsersController);
app.get('/user/:id', authMiddleware, getAUserController);

app.get('/categories', authMiddleware, getAllCategoriesController);

// posts
app.post('/user', createUserController);
app.post('/login', loginUserController);
app.post('/post', authMiddleware, createPostController);

app.post('/categories', authMiddleware, createCategoryController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));