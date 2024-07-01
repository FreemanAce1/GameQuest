'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Liked_Game_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GameId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      unique:true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull:false,
      unique:true
      },
      Img: {
        type: Sequelize.STRING,
        allowNull:false,
      unique:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Liked_Game_Infos');
  }
};