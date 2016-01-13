var express = require('express');
var router = express.Router();
var url = require("url");
var qs = require("querystring");

/* GET home page. */
router.get('/', function(req, res, next) {
	var queryurl = url.parse(req.url).query;
	var ps = qs.parse(queryurl);
	if(queryurl && ps['lang'] == 'en'){
		res.render('index_en', { title: 'Homepage of Yadan'});
	}else{
		res.render('index', { title: '鸭蛋的主页'});
	}
});

module.exports = router;
