const articleModel = require("../Schemas/ArticleModel");



const getArticleByName = async (req, res) => {
    var articleName = req.params.articleName;
    const article = await articleModel.findOne({'articleName': articleName}).exec();
    res.status(200).send(article);
  }


module.exports = getArticleByName;