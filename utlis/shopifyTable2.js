const models = require('../models');
const shopifyCompaniesModel = models.shopifyExpertGuidanceCompanies;

// console.log("this is model", shopifyCompaniesModel)


module.exports.insertShopifyExpertCompanies = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            let result = await shopifyCompaniesModel.create(data);
            console.log("this is result", result.dataValues);
            resolve();

        } catch (error) {
            console.log("this is error while inserting companies data", error);
        }

    })
}