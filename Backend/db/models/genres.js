'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      // define association here (e.g., with your Game model)
    }
  }

  Genre.init({
    Adventure: DataTypes.INTEGER,
    Indie: DataTypes.INTEGER,
    Arcade: DataTypes.INTEGER,
    Visual_Novel: DataTypes.INTEGER,
    Card_and_Board_Game: DataTypes.INTEGER,
    MOBA: DataTypes.INTEGER,
    Point_and_click: DataTypes.INTEGER,
    Fighting: DataTypes.INTEGER,
    Shooter: DataTypes.INTEGER,
    Music: DataTypes.INTEGER,
    Platform: DataTypes.INTEGER,
    Puzzle: DataTypes.INTEGER,
    Racing: DataTypes.INTEGER,
    Real_Time_Strategy_RTS: DataTypes.INTEGER,
    Role_playing_RPG: DataTypes.INTEGER,
    Simulator: DataTypes.INTEGER,
    Sport: DataTypes.INTEGER,
    Strategy: DataTypes.INTEGER,
    Turn_based_strategy_TBS: DataTypes.INTEGER,
    Tactical: DataTypes.INTEGER,
    Hack_and_slash_Beat_em_up: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Genre',
  });

  return Genre;
};
