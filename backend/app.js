const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');
const NotFoundError = require('./errors/not-found-err');
const auth = require('./middlewares/auth');
const { errorHandler } = require('./utils/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors({
  origin: ['http://mesto.lizababicheva.nomoredomains.icu',
    'https://mesto.lizababicheva.nomoredomains.icu'],
  credentials: true,
}));

app.options('*', cors());

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routerUsers);
app.use('/', auth, routerCards);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый путь не найден');
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
