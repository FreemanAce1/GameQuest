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
      Adventure: {
        type: Sequelize.INTEGER
      },
      Indie: {
        type: Sequelize.INTEGER
      },
      Arcade: {
        type: Sequelize.INTEGER
      },
      Visual_Novel: {
        type: Sequelize.INTEGER
      },
      Card_and_Board_Game: {
        type: Sequelize.INTEGER
      },
      MOBA: {
        type: Sequelize.INTEGER
      },
      Point_and_click: {
        type: Sequelize.INTEGER
      },
      Fighting: {
        type: Sequelize.INTEGER
      },
      Shooter: {
        type: Sequelize.INTEGER
      },
      Music: {
        type: Sequelize.INTEGER
      },
      Platform: {
        type: Sequelize.INTEGER
      },
      Puzzle: {
        type: Sequelize.INTEGER
      },
      Racing: {
        type: Sequelize.INTEGER
      },
      Real_Time_Strategy_RTS: {
        type: Sequelize.INTEGER
      },
      Role_playing_RPG: {
        type: Sequelize.INTEGER
      },
      Simulator: {
        type: Sequelize.INTEGER
      },
      Sport: {
        type: Sequelize.INTEGER
      },
      Strategy: {
        type: Sequelize.INTEGER
      },
      Turn_based_strategy_TBS: {
        type: Sequelize.INTEGER
      },
      Tactical: {
        type: Sequelize.INTEGER
      },
      Hack_and_slash_Beat_em_up: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },{
      truncate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Genres');
  }
};
