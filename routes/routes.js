const express = require('express');
const getHomeDataContoller = require('../controllers/RecommendedDataController');
const getArticleByName = require('../controllers/ArticleDataController');
const getArticleByTopic = require('../controllers/TopicController');
const router = express.Router();


// API routes

router.get('/', (req, res) => {
  res.status(200).send('Hi !!!');
})

router.get('/getHomeData', getHomeDataContoller);

router.get('/getArticlesByTopic/:articleName', getArticleByTopic);

router.get('/getArticlesDataByName/:articleName', getArticleByName);

module.exports = router;