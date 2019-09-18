'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shopifyExpertGuidanceCompanies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyCategory: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      companyLocation: {
        type: Sequelize.STRING
      },
      companyServicePrice: {
        type: Sequelize.STRING
      },
      companyCompletedJobs: {
        type: Sequelize.INTEGER
      },
      companyRating: {
        type: Sequelize.STRING
      },
      companyLogoUrl: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('shopifyExpertGuidanceCompanies');
  }
};