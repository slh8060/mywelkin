var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/',function (req,res,next) {
  res.render('index',{index:true});
});

router.get('/getstarted',function (req,res,next) {
  res.render('getstarted',{index:false,belongs:'stylesheet'});
});

router.get('/responsive_utilities',function (req,res,next) {
  res.render('responsive_utilities',{index:false,belongs:'stylesheet'})
});

router.get('/composing',function (req,res,next) {
  res.render('composing',{index:false,belongs:'stylesheet'})
});

router.get('/grid',function (req,res,next) {
  res.render('grid',{index:false,belongs:'stylesheet'})
});


router.get('/navbar',function (req,res,next) {
  res.render('navbar',{index:false,belongs:'component'})
});

router.get('/tooltips',function (req,res,next) {
  res.render('tooltips',{index:false,belongs:'component'})
});

router.get('/dropdown',function (req,res,next) {
  res.render('dropdown',{index:false,belongs:'component'})
});

router.get('/progress',function (req,res,next) {
  res.render('progress',{index:false,belongs:'component'})
});

router.get('/alert',function (req,res,next) {
  res.render('alert',{index:false,belongs:'plugin'})
});

router.get('/modal',function (req,res,next) {
  res.render('modal',{index:false,belongs泥dex:'plugin'})
});



module.exports = router;
