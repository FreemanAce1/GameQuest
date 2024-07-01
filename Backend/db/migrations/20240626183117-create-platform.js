'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Platforms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PC: {
        type: Sequelize.BOOLEAN
      },
      PlayStation_5: {
        type: Sequelize.BOOLEAN
      },
      Xbox_Series_XS: {
        type: Sequelize.BOOLEAN
      },
      Nintendo_Switch: {
        type: Sequelize.BOOLEAN
      },
      Xbox_One: {
        type: Sequelize.BOOLEAN
      },
      Oculus_Quest: {
        type: Sequelize.BOOLEAN
      },
      PlayStation_VR2: {
        type: Sequelize.BOOLEAN
      },
      Meta_Quest_2: {
        type: Sequelize.BOOLEAN
      },
      PlayStation_4: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Platforms');
  }
};