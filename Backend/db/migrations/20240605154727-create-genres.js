'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      UserId: { 
        type:  Sequelize.STRING,
        allowNull: false,
        references: { 
            model: 'Users', 
            key: 'id' 
        }},
      Adventure: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Indie: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Arcade: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Visual_Novel: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Card_and_Board_Game: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      MOBA: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Point_and_click: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Fighting: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Shooter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Music: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Platform: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Puzzle: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Racing: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Real_Time_Strategy_RTS: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Role_playing_RPG: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Simulator: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Sport: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Strategy: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Turn_based_strategy_TBS: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Tactical: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Hack_and_slash_Beat_em_up: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
