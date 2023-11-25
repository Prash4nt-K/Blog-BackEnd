const mongoose = require('mongoose');

var recommendedDataSchema = new mongoose.Schema({
    header: String,
    headerID: String,
    articlesArray: []
});

module.exports = mongoose.model("recommendedDataModel", recommendedDataSchema, "Recommended");