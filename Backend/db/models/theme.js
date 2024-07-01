'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Theme.init({
    Romance: DataTypes.INTEGER,
    Action: DataTypes.INTEGER,
    Fantasy: DataTypes.INTEGER,
    Science_fiction: DataTypes.INTEGER,
    Horror: DataTypes.INTEGER,
    Thriller: DataTypes.INTEGER,
    Survival: DataTypes.INTEGER,
    Historical: DataTypes.INTEGER,
    Stealth: DataTypes.INTEGER,
    Comedy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};