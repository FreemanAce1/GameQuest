'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Platforms', [{
      PC: false,
      PlayStation_5: false,
      Xbox_Series_XS: false,
      Nintendo_Switch: false,
      Xbox_One: false,
      Oculus_Quest: false,
      PlayStation_VR2: false,
      Meta_Quest_2: false,
      PlayStation_4: false,
    }], {});
  },
  
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Platforms', null, {});
  }
};
