var express = require('express');
var router = express.Router();

const ctrlrMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlrMain.index);


//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
