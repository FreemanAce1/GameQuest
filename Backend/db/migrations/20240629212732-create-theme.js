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
      UserId: { 
        type:  Sequelize.STRING,
        allowNull: false,
        references: { 
            model: 'Users', 
            key: 'id' 
        }},
      Romance: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Action: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Fantasy: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Science_fiction: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Horror: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Thriller: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Survival: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Historical: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Stealth: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Comedy: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Business: { type: Sequelize.INTEGER, defaultValue: 0 },
      Non_fiction: { type: Sequelize.INTEGER, defaultValue: 0 },
      Sandbox: { type: Sequelize.INTEGER, defaultValue: 0 },
      Educational: { type: Sequelize.INTEGER, defaultValue: 0 },
      Kids: { type: Sequelize.INTEGER, defaultValue: 0 },
      Open_world: { type: Sequelize.INTEGER, defaultValue: 0 },
      Warfare: { type: Sequelize.INTEGER, defaultValue: 0 },
      Party: { type: Sequelize.INTEGER, defaultValue: 0 },
      FX: { type: Sequelize.INTEGER, defaultValue: 0 },
      Erotic: { type: Sequelize.INTEGER, defaultValue: 0 },
      Mystery: { type: Sequelize.INTEGER, defaultValue: 0 },
      Erotic: { type: Sequelize.INTEGER, defaultValue: 0 },
      Romance: { type: Sequelize.INTEGER, defaultValue: 0 },
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