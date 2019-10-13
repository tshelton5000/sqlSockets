module.exports = function (sequelize, DataTypes) {
  return sequelize.define('adult', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  })
}