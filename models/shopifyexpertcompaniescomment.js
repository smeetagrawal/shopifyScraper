'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopifyExpertCompaniesComment = sequelize.define('shopifyExpertCompaniesComment', {
    companyCategory: DataTypes.STRING,
    commentedOnCompany: DataTypes.STRING,
    commentedBy: DataTypes.STRING,
    commentOnDate: DataTypes.STRING,
    commentRating: DataTypes.STRING,
    comment: DataTypes.TEXT
  }, {});
  shopifyExpertCompaniesComment.associate = function(models) {
    // associations can be defined here
  };
  return shopifyExpertCompaniesComment;
};