const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    articleName: String,
    articleType:String,
    articelContent:String
});

module.exports = mongoose.model("articleModel", articleSchema, "Article");