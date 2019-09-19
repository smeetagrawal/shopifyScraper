'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shopifyExpertCompaniesComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyCategory: {
        type: Sequelize.STRING
      },
      commentedOnCompany: {
        type: Sequelize.STRING
      },
      commentedBy: {
        type: Sequelize.STRING
      },
      commentOnDate: {
        type: Sequelize.STRING
      },
      commentRating: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shopifyExpertCompaniesComments');
  }
};