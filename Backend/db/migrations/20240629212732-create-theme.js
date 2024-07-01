'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Romance: {
        type: Sequelize.INTEGER
      },
      Action: {
        type: Sequelize.INTEGER
      },
      Fantasy: {
        type: Sequelize.INTEGER
      },
      Science_fiction: {
        type: Sequelize.INTEGER
      },
      Horror: {
        type: Sequelize.INTEGER
      },
      Thriller: {
        type: Sequelize.INTEGER
      },
      Survival: {
        type: Sequelize.INTEGER
      },
      Historical: {
        type: Sequelize.INTEGER
      },
      Stealth: {
        type: Sequelize.INTEGER
      },
      Comedy: {
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
    await queryInterface.dropTable('Themes');
  }
};