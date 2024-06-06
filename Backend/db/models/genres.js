'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genres.init({
    Action: DataTypes.INTEGER,
    Indie: DataTypes.INTEGER,
    Adventure: DataTypes.INTEGER,
    RPG: DataTypes.INTEGER,
    Strategy: DataTypes.INTEGER,
    Shooter: DataTypes.INTEGER,
    Casual: DataTypes.INTEGER,
    Simulation: DataTypes.INTEGER,
    Puzzle: DataTypes.INTEGER,
    Arcade: DataTypes.INTEGER,
    Platformer: DataTypes.INTEGER,
    Racing: DataTypes.INTEGER,
    MassivelyMultiplayer: DataTypes.INTEGER,
    Sports: DataTypes.INTEGER,
    Fighting: DataTypes.INTEGER,
    Family: DataTypes.INTEGER,
    BoardGames: DataTypes.INTEGER,
    Educational: DataTypes.INTEGER,
    Card: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genres',
  });
  return Genres;
};