const models = require('../models');
const shopifyCommentModel = models.shopifyExpertCompaniesComment;

module.exports.insertShopifyCompanyComment = (data) => {
    return new Promise(async (resolve,reject) => {
        try {

        let result = await shopifyCommentModel.create(data);
        console.log("this is result", result.dataValues);
        resolve();

        } catch(error){
            console.log("error while inserting comment data", error);
        }
        
    })
}