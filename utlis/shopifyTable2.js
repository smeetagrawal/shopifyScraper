const models = require('../models');
const shopifyCompaniesModel = models.shopifyExpertGuidanceCompanies;

// console.log("this is model", shopifyCompaniesModel)

// this function will store second page data into database
module.exports.insertShopifyExpertCompanies = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            let result = await shopifyCompaniesModel.create(data);
            // console.log("this is result", result.dataValues);
            console.log("shopify category companies data inserted successfully (table2) ");
            resolve();

        } catch (error) {
            console.log("this is error while inserting companies data", error);
        }

    })
}