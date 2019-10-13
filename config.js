const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlSockets', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(() => console.log('Connection established to postgresql database'))
  .catch((err) => console.log(`Connection error: ${err}`))

sequelize.adult = sequelize.import('./models/adult');
sequelize.child = sequelize.import('./models/child');
sequelize.hobby = sequelize.import('./models/hobby');
sequelize.home = sequelize.import('./models/home');

sequelize.adult.hasOne(sequelize.home);
sequelize.adult.hasMany(sequelize.child);
sequelize.child.hasMany(sequelize.hobby);

sequelize.sync({force: true});

module.exports = sequelize;