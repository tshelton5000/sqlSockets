const express = require('express');
const app = express();
const db = require('./config');
const adultController = require('./controllers/adultController');
const childController = require('./controllers/childController');

app.use(require('body-parser').json());

app.use('/adult', adultController);
app.use('/child', childController);

app.listen(3000, () => console.log('express server is listening on port 3000'));