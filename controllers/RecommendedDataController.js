const recommendedDataModel = require("../Schemas/RecommendedDataModel");

const getHomeDataContoller = async (req, res) =>{
    const recommendedData = await recommendedDataModel.find().exec();
    res.status(200).send(recommendedData);
}

module.exports = getHomeDataContoller;