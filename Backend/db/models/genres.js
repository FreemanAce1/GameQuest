'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.belongsTo(models.User,{foreignKey:'UserId'})
    }
  }

  Genre.init({
    UserId: { 
      type: DataTypes.STRING,
      allowNull: false,
      references: { 
          model: 'Users', 
          key: 'id' 
      }
  },
    Adventure: { type: DataTypes.INTEGER, defaultValue: 0 },
    Indie: { type: DataTypes.INTEGER, defaultValue: 0 },
    Arcade: { type: DataTypes.INTEGER, defaultValue: 0 },
    Visual_Novel: { type: DataTypes.INTEGER, defaultValue: 0 },
    Card_and_Board_Game: { type: DataTypes.INTEGER, defaultValue: 0 },
    MOBA: { type: DataTypes.INTEGER, defaultValue: 0 },
    Point_and_click: { type: DataTypes.INTEGER, defaultValue: 0 },
    Fighting: { type: DataTypes.INTEGER, defaultValue: 0 },
    Shooter: { type: DataTypes.INTEGER, defaultValue: 0 },
    Music: { type: DataTypes.INTEGER, defaultValue: 0 },
    Platform: { type: DataTypes.INTEGER, defaultValue: 0 },
    Puzzle: { type: DataTypes.INTEGER, defaultValue: 0 },
    Racing: { type: DataTypes.INTEGER, defaultValue: 0 },
    Real_Time_Strategy_RTS: { type: DataTypes.INTEGER, defaultValue: 0 },
    Role_playing_RPG: { type: DataTypes.INTEGER, defaultValue: 0 },
    Simulator: { type: DataTypes.INTEGER, defaultValue: 0 },
    Sport: { type: DataTypes.INTEGER, defaultValue: 0 },
    Strategy: { type: DataTypes.INTEGER, defaultValue: 0 },
    Turn_based_strategy_TBS: { type: DataTypes.INTEGER, defaultValue: 0 },
    Tactical: { type: DataTypes.INTEGER, defaultValue: 0 },
    Hack_and_slash_Beat_em_up: { type: DataTypes.INTEGER, defaultValue: 0 },
  }, {
    sequelize,
    modelName: 'Genre',
  });

  return Genre;
};
