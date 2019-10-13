module.exports = function(sequelize, DataTypes){
  return sequelize.define('child', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.ENUM('M', 'F')
  })
}