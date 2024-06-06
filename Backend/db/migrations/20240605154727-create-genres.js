'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Action: {
        type: Sequelize.INTEGER
      },
      Indie: {
        type: Sequelize.INTEGER
      },
      Adventure: {
        type: Sequelize.INTEGER
      },
      RPG: {
        type: Sequelize.INTEGER
      },
      Strategy: {
        type: Sequelize.INTEGER
      },
      Shooter: {
        type: Sequelize.INTEGER
      },
      Casual: {
        type: Sequelize.INTEGER
      },
      Simulation: {
        type: Sequelize.INTEGER
      },
      Puzzle: {
        type: Sequelize.INTEGER
      },
      Arcade: {
        type: Sequelize.INTEGER
      },
      Platformer: {
        type: Sequelize.INTEGER
      },
      Racing: {
        type: Sequelize.INTEGER
      },
      MassivelyMultiplayer: {
        type: Sequelize.INTEGER
      },
      Sports: {
        type: Sequelize.INTEGER
      },
      Fighting: {
        type: Sequelize.INTEGER
      },
      Family: {
        type: Sequelize.INTEGER
      },
      BoardGames: {
        type: Sequelize.INTEGER
      },
      Educational: {
        type: Sequelize.INTEGER
      },
      Card: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Genres');
  }
};