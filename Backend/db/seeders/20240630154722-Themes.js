'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      Romance: 0,
      Action: 0,
      Fantasy: 0,
      Science_fiction: 0,
      Horror: 0,
      Thriller: 0,
      Survival: 0,
      Historical: 0,
      Stealth: 0,
      Comedy: 0,
    }], {});
  },
  
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Themes', null, {});
  }
};
