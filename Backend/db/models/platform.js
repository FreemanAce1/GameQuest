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
    }
  }
  Platform.init({
    PC: DataTypes.BOOLEAN,
    PlayStation_5: DataTypes.BOOLEAN,
    Xbox_Series_XS: DataTypes.BOOLEAN,
    Nintendo_Switch: DataTypes.BOOLEAN,
    Xbox_One: DataTypes.BOOLEAN,
    Oculus_Quest: DataTypes.BOOLEAN,
    PlayStation_VR2: DataTypes.BOOLEAN,
    Meta_Quest_2: DataTypes.BOOLEAN,
    PlayStation_4: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Platform',
  });
  return Platform;
};