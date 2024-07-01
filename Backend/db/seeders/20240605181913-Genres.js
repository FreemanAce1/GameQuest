'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [{
      Adventure: 0,
      Indie: 0,
      Arcade: 0,
      Visual_Novel: 0,
      Card_and_Board_Game: 0,
      MOBA: 0,
      Point_and_click: 0,
      Fighting: 0,
      Shooter: 0,
      Music: 0,
      Platform: 0,
      Puzzle: 0,
      Racing: 0,
      Real_Time_Strategy_RTS: 0,
      Role_playing_RPG: 0,
      Simulator: 0,
      Sport: 0,
      Strategy: 0,
      Turn_based_strategy_TBS: 0,
      Tactical: 0,
      Hack_and_slash_Beat_em_up: 0,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  }
};
