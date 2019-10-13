const express = require('express');
const app = express();
const db = require('./config');

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/testRoute', (req, res) => {
  db.adult.create({name: 'Tyler', age: 33})
    .then((adult) => res.json(adult))
    .catch(err => res.json(err))
})

app.listen(3000, () => console.log('express server is listening on port 3000'));