'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [{
      Action: 1,
      Indie: 0,
      Adventure: 2,
      RPG: 1,
      Strategy: 0,
      Shooter: 0,
      Casual: 0,
      Simulation: 0,
      Puzzle: 0,
      Arcade: 0,
      Platformer: 0,
      Racing: 0,
      MassivelyMultiplayer: 0,
      Sports: 0,
      Fighting: 0,
      Family: 0,
      BoardGames: 0,
      Educational: 0,
      Card: 0
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  }
};
