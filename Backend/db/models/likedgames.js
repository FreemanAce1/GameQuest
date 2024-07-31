'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likedGames extends Model {

    static associate(models) {
      // define association here
      likedGames.belongsTo(models.User)
    }
  }
  likedGames.init({
    UserId: {type:DataTypes.STRING},
    gameId: {type:DataTypes.INTEGER,allowNull:false,unique:true},
    gameImg: {type:DataTypes.STRING,allowNull:false,unique:true}
  }, {
    sequelize,
    modelName: 'likedGames',
  });
  return likedGames;
};