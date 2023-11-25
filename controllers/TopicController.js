const topicDataModel = require("../Schemas/TopicDataModel");


const getArticleByTopic = async (req, res) => {
    var articleName = req.params.articleName;
    const allArticlesFOrTopic = await topicDataModel.findOne({'header': articleName}).exec();
    res.status(200).send(allArticlesFOrTopic);
}

module.exports = getArticleByTopic;
