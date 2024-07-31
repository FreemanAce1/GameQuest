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
      UserId: { 
        type:  Sequelize.STRING,
        allowNull: false,
        references: { 
            model: 'Users', 
            key: 'id' 
        }},
      PC: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      PlayStation_5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Xbox_Series_XS: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Nintendo_Switch: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Xbox_One: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Oculus_Quest: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      PlayStation_VR2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      Meta_Quest_2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      PlayStation_4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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