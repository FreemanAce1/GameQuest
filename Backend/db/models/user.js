'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Genre)
      User.hasMany(models.Platform)
      User.hasMany(models.Theme)
      User.hasMany(models.likedGames)
    }
  }
  User.init({
    id:{ type:DataTypes.STRING,allowNull:false,primaryKey:true}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};