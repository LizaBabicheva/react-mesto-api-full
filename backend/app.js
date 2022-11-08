const express = require('express');
const cors = require('cors');
require('dotenv').config();
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
// const { corsOptions } = require('./utils/corsOptions');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors({
  origin: ['http://mesto.lizababicheva.nomoredomains.icu/sign-up',
    'https://mesto.lizababicheva.nomoredomains.icu/sign-up'],
}));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);

app.use(routerUsers);
app.use('/', auth, routerCards);

app.use(errorLogger);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый путь не найден');
});

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
