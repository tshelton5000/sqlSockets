const router = require('express').Router();
const db = require('../config');

// router.post('/', (req, res) => {
//   db.query("INSERT INTO 'children' ('id', 'name', 'age', 'sex', 'adultId') VALUES (2, 'martha', 5, 'F', 1)")
//     .then(res.send('a new child was created'))
//     // .catch(res.send('an error was created'))
// })

router.get('/', (req, res) => {
  db.query("SELECT * FROM children")
    .then(children => res.send(children))
    .catch(err => res.send(err))
})

router.post('/', (req, res) => {
  db.child.create({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex
  })
    .then(res.send('a new child was created'))
    .catch(res.send('an error was created'))
})

module.exports = router;