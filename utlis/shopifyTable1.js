const models = require('../models');
const shopifyCategoryModel = models.shopifyExpertGuidanceCategory;


module.exports.insertShopifyExpertCategory = (data) => {
    return new Promise(async (resolve, reject) => {

        try {
            let result = await shopifyCategoryModel.create(data);
            console.log("this is result", result.dataValues);
            if (result) {
                resolve();
            } else {
                reject();
            }

        } catch (error) {
            console.log("error while inserting data in table 1");
        }
    })



}