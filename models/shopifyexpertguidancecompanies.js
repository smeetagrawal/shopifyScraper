'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopifyExpertGuidanceCompanies = sequelize.define('shopifyExpertGuidanceCompanies', {
    companyCategory: DataTypes.STRING,
    companyName: DataTypes.STRING,
    companyLocation: DataTypes.STRING,
    companyServicePrice: DataTypes.STRING,
    companyCompletedJobs: DataTypes.INTEGER,
    companyRating: DataTypes.STRING,
    companyLogoUrl: DataTypes.STRING
  }, {});
  shopifyExpertGuidanceCompanies.associate = function(models) {
    // associations can be defined here
  };
  return shopifyExpertGuidanceCompanies;
};