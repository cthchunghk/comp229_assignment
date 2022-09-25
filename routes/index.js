var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Front page' });
});

router.get('/about', (req, res, next) => {
  res.render('dummy', {title: 'About me'});
})

router.get('/projects', (req, res, next) =>{
  res.render('dummy');
})

router.get('/services', (req, res, next) =>{
  res.render('dummy');
})

router.get('/contact', (req, res, next) =>{
  res.render('dummy');
})


module.exports = router;
