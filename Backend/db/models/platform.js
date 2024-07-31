'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Platform.belongsTo(models.User,{foreignKey:'UserId'})
    }
  }
  Platform.init({
    UserId: { 
      type: DataTypes.STRING,
      allowNull: false,
      references: { 
          model: 'Users', 
          key: 'id' 
      }
  },
    PC:{ type: DataTypes.BOOLEAN, defaultValue: false },
    PlayStation_5:{ type: DataTypes.BOOLEAN, defaultValue: false },
    Xbox_Series_XS: { type: DataTypes.BOOLEAN, defaultValue: false },
    Nintendo_Switch: { type: DataTypes.BOOLEAN, defaultValue: false },
    Xbox_One: { type: DataTypes.BOOLEAN, defaultValue: false },
    Oculus_Quest: { type: DataTypes.BOOLEAN, defaultValue: false },
    PlayStation_VR2: { type: DataTypes.BOOLEAN, defaultValue: false },
    Meta_Quest_2: { type: DataTypes.BOOLEAN, defaultValue: false },
    PlayStation_4:{ type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    sequelize,
    modelName: 'Platform',
  });
  return Platform;
};