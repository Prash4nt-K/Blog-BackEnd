const mongoose = require('mongoose');

var topicDataSchema = new mongoose.Schema({
    header: String,
    headerID: String,
    articlesArray: []
});

module.exports = mongoose.model("topicDataSchema", topicDataSchema, "Topic");