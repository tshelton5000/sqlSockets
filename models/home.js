module.exports = function(sequelize, DataTypes) {
  return sequelize.define('home', {
    address: DataTypes.STRING,
    value: DataTypes.INTEGER
  })
}