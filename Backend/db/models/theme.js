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
      Theme.belongsTo(models.User,{foreignKey:'UserId'})
    }
  }
  Theme.init({
    UserId: { 
      type: DataTypes.STRING,
      allowNull: false,
      references: { 
          model: 'Users', 
          key: 'id' 
      }
  },
    Romance: { type: DataTypes.INTEGER, defaultValue: 0 },
    Action: { type: DataTypes.INTEGER, defaultValue: 0 },
    Fantasy: { type: DataTypes.INTEGER, defaultValue: 0 },
    Science_fiction: { type: DataTypes.INTEGER, defaultValue: 0 },
    Horror: { type: DataTypes.INTEGER, defaultValue: 0 },
    Thriller: { type: DataTypes.INTEGER, defaultValue: 0 },
    Survival: { type: DataTypes.INTEGER, defaultValue: 0 },
    Historical: { type: DataTypes.INTEGER, defaultValue: 0 },
    Stealth: { type: DataTypes.INTEGER, defaultValue: 0 },
    Comedy: { type: DataTypes.INTEGER, defaultValue: 0 },
    Business: { type: DataTypes.INTEGER, defaultValue: 0 },
    Non_fiction: { type: DataTypes.INTEGER, defaultValue: 0 },
    Sandbox: { type: DataTypes.INTEGER, defaultValue: 0 },
    Educational: { type: DataTypes.INTEGER, defaultValue: 0 },
    Kids: { type: DataTypes.INTEGER, defaultValue: 0 },
    Open_world: { type: DataTypes.INTEGER, defaultValue: 0 },
    Warfare: { type: DataTypes.INTEGER, defaultValue: 0 },
    Party: { type: DataTypes.INTEGER, defaultValue: 0 },
    FX: { type: DataTypes.INTEGER, defaultValue: 0 },
    Erotic: { type: DataTypes.INTEGER, defaultValue: 0 },
    Mystery: { type: DataTypes.INTEGER, defaultValue: 0 },
    Erotic: { type: DataTypes.INTEGER, defaultValue: 0 },
    Romance: { type: DataTypes.INTEGER, defaultValue: 0 },
 

  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};