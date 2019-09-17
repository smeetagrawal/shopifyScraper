'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopifyExpertGuidanceCategory = sequelize.define('shopifyExpertGuidanceCategory', {
    companyCategory: DataTypes.STRING,
    companyOverview: DataTypes.TEXT,
    companyImageUrl: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  shopifyExpertGuidanceCategory.associate = function(models) {
    // associations can be defined here
  };
  return shopifyExpertGuidanceCategory;
};