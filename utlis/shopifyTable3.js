const models = require('../models');
const shopifyCommentModel = models.shopifyExpertCompaniesComment;

// this function will store third page data into database
module.exports.insertShopifyCompanyComment = (data) => {
    return new Promise(async (resolve,reject) => {
        try {

        let result = await shopifyCommentModel.create(data);
        // console.log("this is result", result.dataValues);
        console.log("shopify company comment inserted successfully (table3)");
        resolve();

        } catch(error){
            console.log("error while inserting comment data", error);
        }
        
    })
}