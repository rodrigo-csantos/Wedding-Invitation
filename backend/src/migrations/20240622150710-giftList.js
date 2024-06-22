'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('giftLists', { 
      idGift: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      giftName: Sequelize.STRING,
      selected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      idImage: Sequelize.INTEGER,
      giftGiver:Sequelize.STRING
    });
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('giftLists');
  }
};
