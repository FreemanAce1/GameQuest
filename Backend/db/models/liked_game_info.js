'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Liked_Game_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Liked_Game_Info.init({
    GameId: {type:DataTypes.INTEGER,
      allowNull:false,
      unique:true
    },
    Name: {type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    Img: DataTypes.STRING,
    Desc:{type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Liked_Game_Info',
  });
  return Liked_Game_Info;
};