const router = require('express').Router();
const db = require('../config');

router.get('/', (req, res) => {
  res.send('This is a test of the router module');
})

router.post('/', (req, res) => {
  db.adult.create({name: 'Susan Selby', age: 63})
    .then(res.send('New record in adult table'))
    // .catch(res.send('there was a break'));
})

module.exports = router;