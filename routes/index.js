var express = require('express');
var router = express.Router();


// Getting POST body by using body-parser API
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

router.use(express.json());


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
  res.render('contact');
})

router.post('/sendMsg', (req, res, next) =>{
  // console.log(req.body);
  var post_body = req.body;
  // Return the POST message
  res.send(post_body);
  })


module.exports = router;
