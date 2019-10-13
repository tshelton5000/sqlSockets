module.exports = function(sequelize, DataTypes){
  return sequelize.define('hobby', {
    name: DataTypes.STRING,
    isSport: DataTypes.BOOLEAN
  })
}