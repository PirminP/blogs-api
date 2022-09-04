require('dotenv').config();
const app = require('./api');
const { tokenValidation } = require('./middlewares/author');
const userController = require('./controllers/userController');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', userController.loginApi);
app.post('/user', userController.createUser);
app.get('/user', tokenValidation, userController.getAllUsers);
app.get('/user/:id', tokenValidation, userController.getUserbyId);

app.listen(port, () => console.log('ouvindo porta', port));
